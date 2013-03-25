class Entry < ActiveRecord::Base
  attr_accessible :position, :video_id

  belongs_to :share
  has_one :video
end
