class TemplatesController < ApplicationController
  def page
    render 'templates/' + params[:path]
  end
end
