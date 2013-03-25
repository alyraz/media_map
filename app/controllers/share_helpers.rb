module ShareHelpers

  def save_videos(share, videos)
    videos.each_with_index do |youtube_video_id, index|
        video = Video.find_or_create_by_youtube_video_id(youtube_video_id)
        share.entries.create(:position => index, :video_id => video.id)
    end
  end
end