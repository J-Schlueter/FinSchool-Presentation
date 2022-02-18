class User < ApplicationRecord
    has_many :comments
    has_many :lessons, through: :comments

    has_secure_password

    validates :username, :password, presence: true
end
