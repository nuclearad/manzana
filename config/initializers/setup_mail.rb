=begin
ActionMailer::Base.smtp_settings = {
  :address              => "smtp.gmail.com",
  :port                 => 587,
  :domain               => "gmail.com",
  :user_name            => "jrojas@nuclearagenciadigital.com",
  :password             => "",
  :authentication       => "plain",
  :enable_starttls_auto => true
}
=end

ActionMailer::Base.smtp_settings = {
  :address              => "smtp.gmail.com",
  :port                 => 587,
  :domain               => "gmail.com",
  :user_name            => "danielwebapps@gmail.com",
  :password             => "colombia01",
  :authentication       => "plain",
  :enable_starttls_auto => true
}