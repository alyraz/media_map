class CreateVideos < ActiveRecord::Migration
  def change
    create_table :videos do |t|
      t.integer :youtube_video_id
      t.integer :entry_id

      t.timestamps
    end
  end
end
