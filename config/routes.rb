Rails.application.routes.draw do
  get 'templates/:path' , to: 'templates#page', constraints: {path: /.+/}

  root to: 'home#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
