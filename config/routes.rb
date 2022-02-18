Rails.application.routes.draw do
  
  
  resources :comments
  resources :lessons
  resources :users
  resources :event_entries, only: [:index, :create, :show, :destroy, :update]
  resources :events, only:  [:index, :create, :show, :destroy]
  resources :users, only:  [:index, :create, :show, :update, :destroy]
  get '/me', to: "users#showme"
  get '/signup', to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
