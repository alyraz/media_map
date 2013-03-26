require 'spec_helper'

describe Entry do
 let(:entry) { Entry.new }
  subject { entry }

  it { should respond_to(:position) }

  it { should belong_to(:share) }
  it { should belong_to(:video) }

  it { should validate_presence_of(:position) }
  it { should validate_numericality_of(:position) }

end
