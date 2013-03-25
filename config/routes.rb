Mediamap::Application.routes.draw do
  root :to => 'master#index'
  post "/share" => "master#share"

  # post "/time_frame" => "master#time", :as => :time
end
