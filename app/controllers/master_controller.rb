class MasterController < ApplicationController
  include ShareHelpers

  respond_to :json
  
  def index
  end

  # def time
  #   puts ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"
  #   puts params[:time]
  #   render :json => {:time => params[:time]}.to_json
  # end

  def share
    share = Share.new(params[:shareData])
    if share.save
      save_videos(share, params[:videos])
       render :json => {data: share.short_url}.to_json
    else
      render :json => {data: "failed"}.to_json
    end
  end

  def show
    @share = Share.find_by_short_url(params[:short_url])
    @entries = @share.entries
  end
end
