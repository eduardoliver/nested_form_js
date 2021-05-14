class Project < ApplicationRecord
  has_many :tasks, inverse_of: :project
  accept_nested_attributes_for :tasks, reject_if: :all_blank, allow_destroy: true
end
