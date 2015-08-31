class Mailer < ActionMailer::Base
  default from: 'info@lamanzananaranja.com'

  def contact(message={})
  	@tipo     = message["tipo"]
  	@nombre   = message["nombre"]
  	@email    = message["email"]
  	@telefono = message["telefono"]
  	@mensaje  = message["mensaje"]
  	@subject  = 'Mensaje desde la web'
    mail to: 'jrojas@nuclearagenciadigital.com', subject: @subject
  end
  
end
