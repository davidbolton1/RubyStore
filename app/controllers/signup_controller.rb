class SignupController < ApplicationController
  def create
    user = User.new(user_params)
    
    if user.save
      payload = { user_id: user.id}
      session = JWTSessions::Session.new(payload: payload, refresh_by_access_allowed: true)
    end
  end

  private

    def user_params
      params.permit(:email, :password, :password:confirmation)
    end
end
