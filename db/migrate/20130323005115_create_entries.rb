class CreateEntries < ActiveRecord::Migration
  def change
    create_table :entries do |t|
      t.integer :position
      t.integer :top_id

      t.timestamps
    end
  end
end
