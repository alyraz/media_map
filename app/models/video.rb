class Video < ActiveRecord::Base
  attr_accessible :youtube_video_object
  has_many :entries

  serialize :youtube_video_object
end

# Video.youtube_data = YoutubeData.new(:name => 'blah', :age => 12, :banana_count => 15)
