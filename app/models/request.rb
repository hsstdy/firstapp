class Request < ApplicationRecord
  validates :requested, presence: true
  validates :page, presence: true
end
