class Top < ActiveRecord::Base
  attr_accessible :country, :frequency, :sort_type, :category

  has_many :entries
end
