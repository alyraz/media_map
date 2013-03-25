class Share < ActiveRecord::Base
  attr_accessible :country, :frequency, :sort_type, :category, :short_url

  has_many :entries
end
