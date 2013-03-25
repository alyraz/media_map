class Share < ActiveRecord::Base
  attr_accessible :country, :time, :sort_type, :category, :short_url

  has_many :entries

  before_save :generate_url

  HASH = Digest::MD5
  private

  def generate_url
    key = self.country + self.sort_type.to_s + self.created_at.to_s
    self.short_url = HASH.hexdigest(key)[0..4]
  end
end
