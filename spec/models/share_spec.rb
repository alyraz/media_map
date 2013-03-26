require 'spec_helper'

describe Share do
  let(:share) { Share.new }
  subject { share }

  it { should respond_to(:country) }
  it { should respond_to(:time) }
  it { should respond_to(:sort_type) }
  it { should respond_to(:short_url) }

  it { should have_many :entries }

  it { should validate_presence_of(:country) }
  it { should validate_presence_of(:time) }
  it { should validate_presence_of(:sort_type) }
  it { should validate_presence_of(:category) }

  context "#generate_url" do
    it "should generate a 5 digit url before save" do
      share = Share.new(country: "US", time: "all_time", sort_type: "most_discussed", category: "music")
      share.save
      share.short_url.length.should be(5)
    end
  end
end
