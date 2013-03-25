class CreateShares < ActiveRecord::Migration
  def change
    create_table :shares do |t|
      t.string :country, :null => false
      t.timestamps
    end
  end
end
