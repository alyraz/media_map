class Entry < ActiveRecord::Base
  attr_accessible :position

  belongs_to :share
  belongs_to :video

  validates :position, :presence => true
  validates :position, :numericality => { :only_integer => true}
end
