var Script=function(){var e=document,a=-1!=navigator.userAgent.toLowerCase().indexOf("safari")?!0:!1,t=function(e,a){return e.getElementsByTagName(a)};onload=function(){var r=t(e,"body")[0];if(r.className=r.className&&""!=r.className?r.className+" has-js":"has-js",e.getElementById&&e.createTextNode)for(var n=t(e,"label"),c=0;c<n.length;c++){var s=n[c];if(-1!=s.className.indexOf("label_")){var l=t(s,"input")[0];"label_check"==s.className&&(s.className=a&&1==l.checked||l.checked?"label_check c_on":"label_check c_off",s.onclick=d),"label_radio"==s.className&&(s.className=a&&1==l.checked||l.checked?"label_radio r_on":"label_radio r_off",s.onclick=o)}}};var d=function(){var e=t(this,"input")[0];"label_check c_off"==this.className||!a&&e.checked?(this.className="label_check c_on",a&&e.click()):(this.className="label_check c_off",a&&e.click())},o=function(){var e=t(this,"input")[0];if("label_radio r_off"==this.className||e.checked){for(var d=t(this.parentNode,"label"),o=0;o<d.length;o++){var r=d[o];-1!=r.className.indexOf("label_radio")&&(r.className="label_radio r_off")}this.className="label_radio r_on",a&&e.click()}else this.className="label_radio r_off",a&&e.click()};$(function(){$(".tagsinput").tagsInput(),$("[data-toggle='switch']").wrap('<div class="switch" />').parent().bootstrapSwitch()}),$(".cp1").colorpicker({format:"hex"}),$(".cp2").colorpicker(),top.location!=location&&(top.location.href=document.location.href),$(function(){window.prettyPrint&&prettyPrint(),$("#dp1").datepicker({format:"mm-dd-yyyy"}),$("#dp2").datepicker(),$("#dp3").datepicker(),$("#dp3").datepicker(),$("#dpYears").datepicker(),$("#dpMonths").datepicker();var e=new Date(2012,1,20),a=new Date(2012,1,25);$("#dp4").datepicker().on("changeDate",function(t){t.date.valueOf()>a.valueOf()?$("#alert").show().find("strong").text("The start date can not be greater then the end date"):($("#alert").hide(),e=new Date(t.date),$("#startDate").text($("#dp4").data("date"))),$("#dp4").datepicker("hide")}),$("#dp5").datepicker().on("changeDate",function(t){t.date.valueOf()<e.valueOf()?$("#alert").show().find("strong").text("The end date can not be less then the start date"):($("#alert").hide(),a=new Date(t.date),$("#endDate").text($("#dp5").data("date"))),$("#dp5").datepicker("hide")});var t=new Date,d=new Date(t.getFullYear(),t.getMonth(),t.getDate(),0,0,0,0),o=$("#dpd1").datepicker({onRender:function(e){return e.valueOf()<d.valueOf()?"disabled":""}}).on("changeDate",function(e){if(e.date.valueOf()>r.date.valueOf()){var a=new Date(e.date);a.setDate(a.getDate()+1),r.setValue(a)}o.hide(),$("#dpd2")[0].focus()}).data("datepicker"),r=$("#dpd2").datepicker({onRender:function(e){return e.valueOf()<=o.date.valueOf()?"disabled":""}}).on("changeDate",function(e){r.hide()}).data("datepicker")}),$("#reservation").daterangepicker(),$("#reportrange").daterangepicker({ranges:{Today:["today","today"],Yesterday:["yesterday","yesterday"],"Last 7 Days":[Date.today().add({days:-6}),"today"],"Last 30 Days":[Date.today().add({days:-29}),"today"],"This Month":[Date.today().moveToFirstDayOfMonth(),Date.today().moveToLastDayOfMonth()],"Last Month":[Date.today().moveToFirstDayOfMonth().add({months:-1}),Date.today().moveToFirstDayOfMonth().add({days:-1})]},opens:"left",format:"MM/dd/yyyy",separator:" to ",startDate:Date.today().add({days:-29}),endDate:Date.today(),minDate:"01/01/2012",maxDate:"12/31/2013",locale:{applyLabel:"Submit",fromLabel:"From",toLabel:"To",customRangeLabel:"Custom Range",daysOfWeek:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],firstDay:1},showWeekNumbers:!0,buttonClasses:["btn-danger"]},function(e,a){$("#reportrange span").html(e.toString("MMMM d, yyyy")+" - "+a.toString("MMMM d, yyyy"))}),$("#reportrange span").html(Date.today().add({days:-29}).toString("MMMM d, yyyy")+" - "+Date.today().toString("MMMM d, yyyy"))}();