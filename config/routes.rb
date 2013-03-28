require 'sidekiq/web'
Mediamap::Application.routes.draw do
  root :to => 'master#index'
  post "/share" => "master#share"

  mount Sidekiq::Web => '/sidekiq'
end
