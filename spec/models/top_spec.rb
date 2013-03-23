require 'spec_helper'

describe Top do
  let(:top) { Top.new }
  subject { top }

  it { should repond_to(:country) }
end
