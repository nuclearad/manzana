top.location!=location&&(top.location.href=document.location.href),$(function(){window.prettyPrint&&prettyPrint(),$(".default-date-picker").datepicker({format:"mm-dd-yyyy"}),$(".dpYears").datepicker(),$(".dpMonths").datepicker();var e=new Date(2012,1,20),t=new Date(2012,1,25);$(".dp4").datepicker().on("changeDate",function(a){a.date.valueOf()>t.valueOf()?$(".alert").show().find("strong").text("The start date can not be greater then the end date"):($(".alert").hide(),e=new Date(a.date),$("#startDate").text($(".dp4").data("date"))),$(".dp4").datepicker("hide")}),$(".dp5").datepicker().on("changeDate",function(a){a.date.valueOf()<e.valueOf()?$(".alert").show().find("strong").text("The end date can not be less then the start date"):($(".alert").hide(),t=new Date(a.date),$(".endDate").text($(".dp5").data("date"))),$(".dp5").datepicker("hide")});var a=new Date,i=new Date(a.getFullYear(),a.getMonth(),a.getDate(),0,0,0,0),n=$(".dpd1").datepicker({onRender:function(e){return e.valueOf()<i.valueOf()?"disabled":""}}).on("changeDate",function(e){if(e.date.valueOf()>r.date.valueOf()){var t=new Date(e.date);t.setDate(t.getDate()+1),r.setValue(t)}n.hide(),$(".dpd2")[0].focus()}).data("datepicker"),r=$(".dpd2").datepicker({onRender:function(e){return e.valueOf()<=n.date.valueOf()?"disabled":""}}).on("changeDate",function(e){r.hide()}).data("datepicker")}),$(".form_datetime").datetimepicker({format:"yyyy-mm-dd hh:ii"}),$(".form_datetime-component").datetimepicker({format:"dd MM yyyy - hh:ii"}),$(".form_datetime-adv").datetimepicker({format:"dd MM yyyy - hh:ii",autoclose:!0,todayBtn:!0,startDate:"2013-02-14 10:00",minuteStep:10}),$(".form_datetime-meridian").datetimepicker({format:"dd MM yyyy - HH:ii P",showMeridian:!0,autoclose:!0,todayBtn:!0}),$(".timepicker-default").timepicker(),$(".timepicker-24").timepicker({autoclose:!0,minuteStep:1,showSeconds:!0,showMeridian:!1}),$(".colorpicker-default").colorpicker({format:"hex"}),$(".colorpicker-rgba").colorpicker(),$("#my_multi_select1").multiSelect(),$("#my_multi_select2").multiSelect({selectableOptgroup:!0}),$("#my_multi_select3").multiSelect({selectableHeader:"<input type='text' class='form-control search-input' autocomplete='off' placeholder='search...'>",selectionHeader:"<input type='text' class='form-control search-input' autocomplete='off' placeholder='search...'>",afterInit:function(e){var t=this,a=t.$selectableUl.prev(),i=t.$selectionUl.prev(),n="#"+t.$container.attr("id")+" .ms-elem-selectable:not(.ms-selected)",r="#"+t.$container.attr("id")+" .ms-elem-selection.ms-selected";t.qs1=a.quicksearch(n).on("keydown",function(e){return 40===e.which?(t.$selectableUl.focus(),!1):void 0}),t.qs2=i.quicksearch(r).on("keydown",function(e){return 40==e.which?(t.$selectionUl.focus(),!1):void 0})},afterSelect:function(){this.qs1.cache(),this.qs2.cache()},afterDeselect:function(){this.qs1.cache(),this.qs2.cache()}}),$("#spinner1").spinner(),$("#spinner2").spinner({disabled:!0}),$("#spinner3").spinner({value:0,min:0,max:10}),$("#spinner4").spinner({value:0,step:5,min:0,max:200}),$(".wysihtml5").wysihtml5();