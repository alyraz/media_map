class CreateShares < ActiveRecord::Migration
  def change
    create_table :shares do |t|
      t.string :country

      t.timestamps
    end
  end
end
