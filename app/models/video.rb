class Video < ActiveRecord::Base
  attr_accessible :youtube_video_object
  has_many :entries

  serialize :youtube_video_object
end
