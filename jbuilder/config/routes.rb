Rails.application.routes.draw do
  # Your routes here!
  namespace :api, defaults: { format: :json } do
    resources :parties, only: [:show, :index]
    resources :gifts, only: [:show]
    resources :guests do 
      resources :gifts, only: [:index] 
    end

  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
