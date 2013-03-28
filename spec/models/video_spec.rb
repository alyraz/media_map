require 'spec_helper'

describe Video do
  let(:video) { Video.new }
  subject { video }

  it { should respond_to(:youtube_video_object) }
  it { should have_many(:entries) }
end
