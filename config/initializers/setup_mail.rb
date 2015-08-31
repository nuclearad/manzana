ActionMailer::Base.smtp_settings = {
  :address              => "smtp.gmail.com",
  :port                 => 587,
  :domain               => "gmail.com",
  :user_name            => "jrojas@nuclearagenciadigital.com",
  :password             => "",
  :authentication       => "plain",
  :enable_starttls_auto => true
}

=begin
ActionMailer::Base.smtp_settings = {
  :address              => "smtp.gmail.com",
  :port                 => 587,
  :domain               => "45.55.172.80",
  :user_name            => "lamanzananaranja1@gmail.com",
  :password             => "lamanzana1naranja",
  :authentication       => "plain",
  :enable_starttls_auto => false
}
=end

