Rails.application.routes.draw do
  get 'orders/create'
  get 'orders/index'
  resources :products do
    resources :orders, only: :create
  end

  resources :orders, only: :index do
    collection do
      get "clean"
    end
  end

  resources :billings, only: [:index] do
    collection do
      get 'pre_pay'
      get 'execute'
    end
  end
  root 'welcome#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
