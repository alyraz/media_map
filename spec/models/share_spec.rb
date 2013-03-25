require 'spec_helper'

describe Share do
  let(:share) { Share.new }
  subject { share }

  it { should repond_to(:country) }
end
