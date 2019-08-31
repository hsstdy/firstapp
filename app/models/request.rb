class Request < ApplicationRecord
  validates :requested, presence: true
  validates :page, presence: true

  def self.count_by_date(form, to)
    q = select('date(requested)').count
    q = q.where('date(requested) >= ?', from) if not from.nil?
    q = q.where('date(requested) <= ?', to) if not to.nil?
    q = q.group('date(requested)')
    q = q.order('date(requested)')
  end
end
