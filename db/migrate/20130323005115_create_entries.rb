class CreateEntries < ActiveRecord::Migration
  def change
    create_table :entries do |t|
      t.integer :position
      t.integer :share_id
      t.integer :video_id

      t.timestamps
    end
  end
end
