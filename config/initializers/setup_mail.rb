ActionMailer::Base.smtp_settings = {
  :address              => "smtp.gmail.com",
  :port                 => 587,
  :domain               => "gmail.com",
  :user_name            => "jrojas@nuclearagenciadigital.com",
  :password             => "remolacho",
  :authentication       => "plain",
  :enable_starttls_auto => true
}

=begin
	
  config.action_mailer.smtp_settings  = {
      address: 'smtp.gmail.com',
      port: 587,
      domain: 'localhost',
      authentication: 'plain',
      enable_starttls_auto: true,
      user_name: 'danielwebapps@gmail.com',
      password: 'colombia01'
  }

	
=end