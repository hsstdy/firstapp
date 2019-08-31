class RequestsController < ApplicationController

  def count_by_date
    from = Date.parse(params["fromDate"])
    to = Date.parse(params["toDate"])
    render json: Request.count_by_date(from, to)
  end

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
