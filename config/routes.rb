Rails.application.routes.draw do

  root 'samples#index'
  get 'samples' => 'samples#index'

end
