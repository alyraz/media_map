class AddFieldsToSharesTable < ActiveRecord::Migration
  def change
    add_column :shares, :time, :string
    add_column :shares, :sort_type, :string
    add_column :shares, :category, :string
    add_column :shares, :short_url, :string
  end
end
