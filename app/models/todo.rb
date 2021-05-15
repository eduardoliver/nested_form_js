class Todo < ApplicationRecord
  acts_as_list

  scope :sorted, -> { order(position: :asc) }
end
