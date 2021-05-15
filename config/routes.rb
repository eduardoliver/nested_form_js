Rails.application.routes.draw do
  resources :posts
  resources :todos do
    member do
      patch :move
    end
  end
  
  resources :projects
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
