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
    puts params
  end
end
