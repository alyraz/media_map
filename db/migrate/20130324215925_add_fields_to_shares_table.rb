class AddFieldsToSharesTable < ActiveRecord::Migration
  def change
    add_column :shares, :frequency, :integer
    add_column :shares, :sort_type, :integer
    add_column :shares, :category, :integer
    add_column :shares, :short_url, :string
  end
end
