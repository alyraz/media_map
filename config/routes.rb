Mediamap::Application.routes.draw do
  root :to => 'master#index'
  post "/share" => "master#share"
  # get "/:short_url" => "master#show"

  # post "/time_frame" => "master#time", :as => :time
end
