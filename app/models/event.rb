class Event < ApplicationRecord
  belongs_to :user
  belongs_to :platform
end