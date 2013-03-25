class AddFieldsToVideosTable < ActiveRecord::Migration
  def change
    add_column :tops, :frequency, :integer
    add_column :tops, :sort_type, :integer
    add_column :tops, :category, :integer
  end
end
