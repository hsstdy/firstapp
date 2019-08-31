Rails.application.routes.draw do
  get 'templates/:path' , to: 'templates#page', constraints: {path: /.+/}
  get 'requests/count_by_date'
  post 'requests/create'

  root to: 'home#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
