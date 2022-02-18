class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :lesson

  validates :text, :user_id, :lesson_id, presence: true
end
