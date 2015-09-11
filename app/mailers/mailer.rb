class Mailer < ActionMailer::Base
  default from: 'lamanzananaranja1@gmail.com'

  def contact(message={})
  	@tipo     = message["tipo"]
  	@nombre   = message["nombre"]
  	@email    = message["email"]
  	@telefono = message["telefono"]
  	@mensaje  = message["mensaje"]
  	@subject  = 'Mensaje desde la web'
    mail to: ['info@lamanzananaranja.com'], subject: @subject
  end
  
end
