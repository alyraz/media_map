class Entry < ActiveRecord::Base
  attr_accessible :position, :video_id

  belongs_to :share
  belongs_to :video
end
