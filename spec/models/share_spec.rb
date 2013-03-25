require 'spec_helper'

describe Share do
  let(:share) { Share.new }
  subject { share }

  it { should respond_to(:country) }
  it { should respond_to(:time) }
  it { should respond_to(:sort_type) }
  it { should respond_to(:short_url) }

  it { should have_many :entries }
end
