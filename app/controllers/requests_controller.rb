class RequestsController < ApplicationController
  def create
    @request = Request.new(request_params)
    if @request.save
      render json: {successu: true}
    else
      render json: {successu: false}
    end
  end

  private
    def request_params
      params.require(:request).permit(:requested, :page)
    end
end
