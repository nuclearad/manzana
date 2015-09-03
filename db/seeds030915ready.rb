# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

text = Text.find_by(id: 20, title: 'La Manzana Naranja')
text.description = "<p>Comenz&aacute;remos ofreciendo servicio en la zona sur de Medell&iacute;n (sector el Poblado, Envigado, Sabaneta, Itag&uuml;&iacute; y La Estrella); nuestra prioridad es ser eficientes en las entregas, por esto te invitamos, con tus recomendados de tu empresa, a unirse a nuestros planes, ya que no cobr&aacute;remos el domicilio si podemos atender a m&aacute;s de 3 usuarios entregando en una misma direcci&oacute;n.</p>
<p>De igual manera revisaremos puntualmente si se podr&aacute; ofrecer nuestro producto a empresas fuera de &eacute;sta zona de acuerdo al n&uacute;mero de clientes que est&eacute;n interesados en nuestra oferta de servicio.</p>"
if text.save
	puts "se modifico el campo con id 20 La Manzana Naranja"
else
	puts "No se pudo modificar el campo con id 20 La Manzana Naranja"
end