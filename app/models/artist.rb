class Artist < ApplicationRecord
  has_many :records, dependent: :destroy
  
  belongs_to :user
end
