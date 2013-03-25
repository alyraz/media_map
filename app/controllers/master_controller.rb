class MasterController < ApplicationController
  respond_to :json
  
  def index
  end

  # def time
  #   puts ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"
  #   puts params[:time]
  #   render :json => {:time => params[:time]}.to_json
  # end

  def share
    puts "--------------------------------"
    puts params
    share = Share.new(params[:shareData])
     if share.save
       render :json => {data: "success"}.to_json
     else
      render :json => {data: "fail"}.to_json
    end
  end

  def show
    @share = Share.find_by_short_url(params[:short_url])
    if @share
      render :json => {:country   => @share.country,
                               :frequency => @share.frequency,
                               :sort_type => @share.sort_type,
                               :category  => @share.category}.to_json
    end
  end
end
