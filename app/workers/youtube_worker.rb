class YoutubeWorker
  include Sidekiq::Worker

  def perform
    selectable_regions =  ["AE", "AR", "AU", "BE", "BR", "CA",
                      "CL", "CO", "CZ", "DE", "DZ",
                      "EG", "ES", "FR", "GB", "GH",
                      "GR", "HK", "HU", "ID", "IE", "IL",
                      "IN", "IT", "JO", "JP", "KE", "KR",
                      "MA", "MX", "MY", "NG", "NL",
                      "NZ", "PE", "PH", "PL", "RU", "SA",
                      "SE", "SG", "TN", "TR", "TW",
                      "UG", "US", "YE", "ZA"]
    sorts = ["most_popular", "most_discussed", "most_responded", "most_subscribed", "top_rated", "top_favorites"]
    categories = ["", "_Music", "_News", "_Entertainment", "_Sports", "_Movies"]
    times = ["today", "all_time"]

    hydra = Typhoeus::Hydra.new(:max_concurrency => 5)

    selectable_regions.each do |country|
      sorts.each do |sort|
        categories.each do |category|
          times.each do |time|
            hydra.queue create_video_request(:country => country, :sort => sort, :category => category, :time => time)
          end
        end
      end
    end
    hydra.run
  end

  private
  def create_video_request(params = {})
    country, sort, category, time = params[:country], params[:sort], params[:category], params[:time]

    request = Typhoeus::Request.new("http://gdata.youtube.com/feeds/api/standardfeeds/#{country}/#{sort}#{category}?v=2&time=#{time}&max-results=5&alt=jsonc")
    request.on_complete do |response|
      result = JSON.parse(response.body)
      # puts "result: #{result}"
      category = "all" if category == ""
      share = Share.create(:country => country,
                        :time => time,
                        :sort_type => sort,
                        :category => category)
      unless result.has_key?("error") || result['data']['totalItems'] == 0
        result["data"]["items"].each_with_index do |video_obj, index|
          # do something with this video["id"] and video["viewCount"]
          video = Video.create(:youtube_video_object => video_obj)
          video.entries << share.entries.create(:position => index)
        end
      end
    end
    request
  end
end
