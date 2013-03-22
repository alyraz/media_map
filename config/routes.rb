Mediamap::Application.routes.draw do
  root :to => 'master#index'
  match '/:country_code', :to => 'master#index'
end
