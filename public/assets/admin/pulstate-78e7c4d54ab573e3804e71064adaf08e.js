var Pulstate=function(){jQuery("#pulsate-regular").pulsate({color:"#E74955"}),jQuery("#pulsate-once").click(function(){$(this).pulsate({color:"#A5D16C",repeat:!1})}),jQuery("#pulsate-hover").pulsate({color:"#4A8BC2",repeat:!1,onHover:!0}),jQuery("#pulsate-crazy").click(function(){$(this).pulsate({color:"#FCB322",reach:50,repeat:10,speed:100,glow:!0})})}();