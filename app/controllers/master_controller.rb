class MasterController < ApplicationController
  include ShareHelpers

  respond_to :json
  
  def index
  end

  def share
    if share = find_share(params)
    sorted_videos = find_sorted_videos(share)
      if sorted_videos.length > 0
        render :json => {videos: sorted_videos}.to_json
      end
    end
  end

  def show
    @share = Share.find_by_short_url(params[:short_url])
    @entries = @share.entries
  end
end
