namespace :youtube do
  desc "populate db top 14 videos for all possible filter country combination "
  task :archive => :environment do
    selectable_regions =  ["AE", "AR"] #"AU", "BE", "BR", "CA",
                      # "CL", "CO", "CZ", "DE", "DZ",
                      # "EG", "ES", "FR", "GB", "GH",
                      # "GR", "HK", "HU", "ID", "IE", "IL",
                      # "IN", "IT", "JO", "JP", "KE", "KR",
                      # "MA", "MX", "MY", "NG", "NL",
                      # "NZ", "PE", "PH", "PL", "RU", "SA",
                      # "SE", "SG", "TN", "TR", "TW",
                      # "UG", "US", "YE", "ZA"]
    sorts = ["most_popular", "most_discussed", "most_responded", "most_subscribed", "top_rated", "top_favorites"]
    categories = ["", "_Music", "_News", "_Entertainment", "_Sports", "_Movies"]
    times = ["today", "all_time"]
    selectable_regions.each do |country|
      sorts.each do |sort|
        categories.each do |category|
          times.each do |time|
            query = "http://gdata.youtube.com/feeds/api/standardfeeds/#{country}/#{sort}#{category}?v=2&time=#{time}&max-results=5&alt=jsonc"
            result = HTTParty.get(query)
            # puts "result: #{result}"
            category = "all" if category == ""
            puts "!!!!!!!!!! #{country} #{time} #{sort} #{category}"
            share = Share.create(:country => country,
                              :time => time,
                              :sort_type => sort,
                              :category => category)
            unless result.has_key?("error")
              result["data"]["items"].each_with_index do |video_obj, index|
                # do something with this video["id"] and video["viewCount"]
                video = Video.find_or_create_by_youtube_video_id(video_obj["id"])
                video.entries << share.entries.create(:position => index,
                                                      :view_count => video["viewCount"])
              end
            end
          end
        end
      end
    end
  end
end
  
