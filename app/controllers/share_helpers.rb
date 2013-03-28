module ShareHelpers
  def save_videos(share, videos)
    videos.each_with_index do |youtube_video_object, index|
        video = Video.find_or_create_by_youtube_video_object(youtube_video_object)
        video.entries << share.entries.create(:position => index)
    end
  end

  def find_share(params)
    date = params[:date].split("-").map(&:to_i)
    month, day, year = date[0..2]
    start_of_day = DateTime.new(year,month,day).beginning_of_day
    end_of_day = DateTime.new(year,month,day).end_of_day

    Share.where("country = :country AND sort_type = :sort_type AND category = :category AND time = :time  AND created_at >= :start_of_day AND created_at <= :end_of_day",
                {:country => params[:country], :sort_type => params[:sort], :category => params[:category], :time => params[:timeFrame], :start_of_day => start_of_day, :end_of_day => end_of_day}).first
  end

  def find_sorted_videos(share)
    sorted_entries = share.entries.sort_by(&:position)
    sorted_videos = []
    sorted_entries.each do |entry|
      sorted_videos << Video.find(entry.video_id).youtube_video_object
    end
    sorted_videos
  end
end
