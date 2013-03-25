class Video < ActiveRecord::Base
  attr_accessible :youtube_video_id, :entry_id
  has_many :entries
end
