class CreateVideos < ActiveRecord::Migration
  def change
    create_table :videos do |t|
      t.text :youtube_video_object
      t.timestamps
    end
  end
end
