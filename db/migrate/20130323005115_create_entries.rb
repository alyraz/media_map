class CreateEntries < ActiveRecord::Migration
  def change
    create_table :entries do |t|
      t.integer :position, :null => false
      t.integer :share_id, :null => false
      t.integer :video_id
      t.timestamps
    end
  end
end
