# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
text = Text.find_by(id: 24)
text.title = "Servicio de Catering"
if text.save
 puts "se modifico el campo title del registro con id 24 SERVICIO DE CATERING"
else
 puts "No se pudo modificar el campo title del registro con id 25 SERVICIO DE CATERING"
end

text = Text.find_by(id: 25)
text.title = "Nuestro Empaque"
if text.save
 puts "se modifico el campo title del registro con id 25 Nuestro Empaque"
else
 puts "No se pudo modificar el campo title del registro con id 25 Nuestro Empaque"
end