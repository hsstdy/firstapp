require 'test_helper'

class TemplatesControllerTest < ActionDispatch::IntegrationTest
  test "should get page" do
    get templates_page_url
    assert_response :success
  end

end
