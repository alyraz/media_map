# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20130324215925) do

  create_table "entries", :force => true do |t|
    t.integer  "position"
    t.integer  "share_id"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "shares", :force => true do |t|
    t.string   "country"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
    t.integer  "frequency"
    t.integer  "sort_type"
    t.integer  "category"
    t.string   "short_url"
  end

  create_table "videos", :force => true do |t|
    t.integer  "youtube_video_id"
    t.integer  "entry_id"
    t.datetime "created_at",       :null => false
    t.datetime "updated_at",       :null => false
  end

end
