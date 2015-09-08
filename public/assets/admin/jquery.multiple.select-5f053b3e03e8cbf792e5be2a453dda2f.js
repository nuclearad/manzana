!function(e){"use strict";function t(t,s){var i=this,l=t.attr("name")||s.name||"",o=t.parent().attr("style")||"";t.parent().hide();var n=t.css("width");t.parent().show().attr("style",o),"0px"==n&&(n=t.outerWidth()+20),this.$el=t.hide(),this.options=s,this.$parent=e("<div"+e.map(["class","title"],function(e){var t=i.$el.attr(e)||"";return t=("class"===e?"ms-parent"+(t?" ":""):"")+t,t?" "+e+'="'+t+'"':""}).join("")+" />"),this.$choice=e('<button type="button" class="ms-choice"><span class="placeholder">'+s.placeholder+"</span><div></div></button>"),this.$drop=e('<div class="ms-drop '+s.position+'"></div>'),this.$el.after(this.$parent),this.$parent.append(this.$choice),this.$parent.append(this.$drop),this.$el.prop("disabled")&&this.$choice.addClass("disabled"),this.$parent.css("width",s.width||n),this.options.keepOpen||e("body").click(function(t){e(t.target)[0]!==i.$choice[0]&&e(t.target).parents(".ms-choice")[0]!==i.$choice[0]&&(e(t.target)[0]!==i.$drop[0]&&e(t.target).parents(".ms-drop")[0]===i.$drop[0]||!i.options.isOpen||i.close())}),this.selectAllName='name="selectAll'+l+'"',this.selectGroupName='name="selectGroup'+l+'"',this.selectItemName='name="selectItem'+l+'"'}t.prototype={constructor:t,init:function(){var t=this;this.options.filter&&this.$drop.append('<div class="ms-search">','<input type="text" autocomplete="off" autocorrect="off" autocapitilize="off" spellcheck="false">',"</div>");var s=e("<ul></ul>");this.options.selectAll&&!this.options.single&&s.append('<li class="ms-select-all"><label><input type="checkbox" '+this.selectAllName+" /> "+this.options.selectAllDelimiter[0]+this.options.selectAllText+this.options.selectAllDelimiter[1]+"</label></li>"),e.each(this.$el.children(),function(e,i){s.append(t.optionToHtml(e,i))}),s.append('<li class="ms-no-results">'+this.options.noMatchesFound+"</li>"),this.$drop.append(s),this.$drop.find("ul").css("max-height",this.options.maxHeight+"px"),this.$drop.find(".multiple").css("width",this.options.multipleWidth+"px"),this.$searchInput=this.$drop.find(".ms-search input"),this.$selectAll=this.$drop.find("input["+this.selectAllName+"]"),this.$selectGroups=this.$drop.find("input["+this.selectGroupName+"]"),this.$selectItems=this.$drop.find("input["+this.selectItemName+"]:enabled"),this.$disableItems=this.$drop.find("input["+this.selectItemName+"]:disabled"),this.$noResults=this.$drop.find(".ms-no-results"),this.events(),this.updateSelectAll(!0),this.update(!0),this.options.isOpen&&this.open()},optionToHtml:function(t,s,i,l){var o,n=this,c=e(s),h=this.options.multiple,p=["class","title"],a=e.map(p,function(e,t){var s="class"===e&&h,i=c.attr(e)||"";return s||i?" "+e+'="'+(s?"multiple"+(i?" ":""):"")+i+'"':""}).join(""),r=this.options.single?"radio":"checkbox";if(c.is("option")){var d=c.val(),u=n.options.textTemplate(c),f=c.prop("selected"),m=this.options.styler(d)?' style="'+this.options.styler(d)+'"':"";if(o=l||c.prop("disabled"),this.options.blockSeparator>""&&this.options.blockSeparator==c.val()){var $=e("<li"+a+m+">",'<label class="'+this.options.blockSeparator+(o?"disabled":"")+'">',"</label>","</li>");return $.find("label").append(document.createTextNode(u)),$}var $=e("<li"+a+m+"><label"+(o?' class="disabled"':"")+'><input type="'+r+'" '+this.selectItemName+(f?' checked="checked"':"")+(o?' disabled="disabled"':"")+(i?' data-group="'+i+'"':"")+"/> </label></li>");return $.find("input").val(d),$.find("label").append(document.createTextNode(u)),$}if(!i&&c.is("optgroup")){var k="group_"+t,g=c.attr("label");o=c.prop("disabled");var i=e("<div/>");return i.append('<li class="group"><label class="optgroup'+(o?" disabled":"")+'" data-group="'+k+'">'+(this.options.hideOptgroupCheckboxes?"":'<input type="checkbox" '+this.selectGroupName+(o?' disabled="disabled"':"")+" /> ")+g+"</label></li>"),$.find("label").append(document.createTextNode(u)),e.each(c.children(),function(e,t){i.append(n.optionToHtml(e,t,k,o))}),i.html()}},events:function(){function t(e){e.preventDefault(),s[s.options.isOpen?"close":"open"]()}var s=this,i=this.$el.parent().closest("label")[0]||e("label[for="+this.$el.attr("id").split(":").join("\\:")+"]")[0];i&&e(i).off("click").on("click",function(e){"label"===e.target.nodeName.toLowerCase()&&e.target===this&&(t(e),s.options.filter&&s.options.isOpen||s.focus(),e.stopPropagation())}),this.$choice.off("click").on("click",t).off("focus").on("focus",this.options.onFocus).off("blur").on("blur",this.options.onBlur),this.$parent.off("keydown").on("keydown",function(e){switch(e.which){case 27:s.close(),s.$choice.focus()}}),this.$searchInput.off("keydown").on("keydown",function(e){9===e.keyCode&&e.shiftKey&&s.close()}).off("keyup").on("keyup",function(e){return s.options.filterAcceptOnEnter&&(13===e.which||32==e.which)&&s.$searchInput.val()?(s.$selectAll.click(),s.close(),void s.focus()):void s.filter()}),this.$selectAll.off("click").on("click",function(){var t=e(this).prop("checked"),i=s.$selectItems.filter(":visible");i.length===s.$selectItems.length?s[t?"checkAll":"uncheckAll"]():(s.$selectGroups.prop("checked",t),i.prop("checked",t),s.options[t?"onCheckAll":"onUncheckAll"](),s.update())}),this.$selectGroups.off("click").on("click",function(){var t=e(this).parent().attr("data-group"),i=s.$selectItems.filter(":visible"),l=i.filter('[data-group="'+t+'"]'),o=l.length!==l.filter(":checked").length;l.prop("checked",o),s.updateSelectAll(),s.update(),s.options.onOptgroupClick({label:e(this).parent().text(),checked:o,children:l.get()})}),this.$selectItems.off("click").on("click",function(){s.updateSelectAll(),s.update(),s.updateOptGroupSelect(),s.options.onClick({label:e(this).parent().text(),value:e(this).val(),checked:e(this).prop("checked")}),s.options.single&&s.options.isOpen&&!s.options.keepOpen&&s.close()})},open:function(){if(!this.$choice.hasClass("disabled")){if(this.options.isOpen=!0,this.$choice.find(">div").addClass("open"),this.$drop.show(),this.$selectAll.parent().show(),this.$noResults.hide(),0===this.$el.children().length&&(this.$selectAll.parent().hide(),this.$noResults.show()),this.options.container){var t=this.$drop.offset();this.$drop.appendTo(e(this.options.container)),this.$drop.offset({top:t.top,left:t.left})}this.options.filter&&(this.$searchInput.val(""),this.$searchInput.focus(),this.filter()),this.options.onOpen()}},close:function(){this.options.isOpen=!1,this.$choice.find(">div").removeClass("open"),this.$drop.hide(),this.options.container&&(this.$parent.append(this.$drop),this.$drop.css({top:"auto",left:"auto"})),this.options.onClose()},update:function(t){var s=this.getSelects(),i=this.$choice.find(">span");0===s.length?i.addClass("placeholder").html(this.options.placeholder):this.options.countSelected&&s.length<this.options.minimumCountSelected?i.removeClass("placeholder").text((this.options.displayValues?s:this.getSelects("text")).join(this.options.delimiter)):this.options.allSelected&&s.length===this.$selectItems.length+this.$disableItems.length?i.removeClass("placeholder").html(this.options.allSelected):(this.options.countSelected||this.options.etcaetera)&&s.length>this.options.minimumCountSelected?this.options.etcaetera?i.removeClass("placeholder").text((this.options.displayValues?s:this.getSelects("text").slice(0,this.options.minimumCountSelected)).join(this.options.delimiter)+"..."):i.removeClass("placeholder").html(this.options.countSelected.replace("#",s.length).replace("%",this.$selectItems.length+this.$disableItems.length)):i.removeClass("placeholder").text((this.options.displayValues?s:this.getSelects("text")).join(this.options.delimiter)),this.options.addTitle&&i.prop("title",this.getSelects("text")),this.$el.val(this.getSelects()),this.$drop.find("li").removeClass("selected"),this.$drop.find("input["+this.selectItemName+"]:checked").each(function(){e(this).parents("li").first().addClass("selected")}),t||this.$el.trigger("change")},updateSelectAll:function(e){var t=this.$selectItems;e||(t=t.filter(":visible")),this.$selectAll.prop("checked",t.length&&t.length===t.filter(":checked").length),this.$selectAll.prop("checked")&&this.options.onCheckAll()},updateOptGroupSelect:function(){var t=this.$selectItems.filter(":visible");e.each(this.$selectGroups,function(s,i){var l=e(i).parent().attr("data-group"),o=t.filter('[data-group="'+l+'"]');e(i).prop("checked",o.length&&o.length===o.filter(":checked").length)})},getSelects:function(t){var s=this,i=[],l=[];return this.$drop.find("input["+this.selectItemName+"]:checked").each(function(){i.push(e(this).parents("li").first().text()),l.push(e(this).val())}),"text"===t&&this.$selectGroups.length&&(i=[],this.$selectGroups.each(function(){var t=[],l=e.trim(e(this).parent().text()),o=e(this).parent().data("group"),n=s.$drop.find("["+s.selectItemName+'][data-group="'+o+'"]'),c=n.filter(":checked");if(0!==c.length){if(t.push("["),t.push(l),n.length>c.length){var h=[];c.each(function(){h.push(e(this).parent().text())}),t.push(": "+h.join(", "))}t.push("]"),i.push(t.join(""))}})),"text"===t?i:l},setSelects:function(t){var s=this;this.$selectItems.prop("checked",!1),e.each(t,function(e,t){s.$selectItems.filter('[value="'+t+'"]').prop("checked",!0)}),this.$selectAll.prop("checked",this.$selectItems.length===this.$selectItems.filter(":checked").length),this.update()},enable:function(){this.$choice.removeClass("disabled")},disable:function(){this.$choice.addClass("disabled")},checkAll:function(){this.$selectItems.prop("checked",!0),this.$selectGroups.prop("checked",!0),this.$selectAll.prop("checked",!0),this.update(),this.options.onCheckAll()},uncheckAll:function(){this.$selectItems.prop("checked",!1),this.$selectGroups.prop("checked",!1),this.$selectAll.prop("checked",!1),this.update(),this.options.onUncheckAll()},focus:function(){this.$choice.focus(),this.options.onFocus()},blur:function(){this.$choice.blur(),this.options.onBlur()},refresh:function(){this.init()},filter:function(){var t=this,s=e.trim(this.$searchInput.val()).toLowerCase();0===s.length?(this.$selectItems.parent().show(),this.$disableItems.parent().show(),this.$selectGroups.parent().show()):(this.$selectItems.each(function(){var t=e(this).parent();t[t.text().toLowerCase().indexOf(s)<0?"hide":"show"]()}),this.$disableItems.parent().hide(),this.$selectGroups.each(function(){var s=e(this).parent(),i=s.attr("data-group"),l=t.$selectItems.filter(":visible");s[0===l.filter('[data-group="'+i+'"]').length?"hide":"show"]()}),this.$selectItems.filter(":visible").length?(this.$selectAll.parent().show(),this.$noResults.hide()):(this.$selectAll.parent().hide(),this.$noResults.show())),this.updateOptGroupSelect(),this.updateSelectAll()}},e.fn.multipleSelect=function(){var s,i=arguments[0],l=arguments,o=["getSelects","setSelects","enable","disable","checkAll","uncheckAll","focus","blur","refresh","close"];return this.each(function(){var n=e(this),c=n.data("multipleSelect"),h=e.extend({},e.fn.multipleSelect.defaults,n.data(),"object"==typeof i&&i);if(c||(c=new t(n,h),n.data("multipleSelect",c)),"string"==typeof i){if(e.inArray(i,o)<0)throw"Unknown method: "+i;s=c[i](l[1])}else c.init(),l[1]&&(s=c[l[1]].apply(c,[].slice.call(l,2)))}),s?s:this},e.fn.multipleSelect.defaults={name:"",isOpen:!1,placeholder:"",selectAll:!0,selectAllText:"Select all",selectAllDelimiter:["[","]"],allSelected:"All selected",minimumCountSelected:3,countSelected:"# of % selected",noMatchesFound:"No matches found",multiple:!1,multipleWidth:80,single:!1,filter:!1,width:void 0,maxHeight:250,container:null,position:"bottom",keepOpen:!1,blockSeparator:"",displayValues:!1,delimiter:", ",addTitle:!1,styler:function(){return!1},textTemplate:function(e){return e.text()},onOpen:function(){return!1},onClose:function(){return!1},onCheckAll:function(){return!1},onUncheckAll:function(){return!1},onFocus:function(){return!1},onBlur:function(){return!1},onOptgroupClick:function(){return!1},onClick:function(){return!1}}}(jQuery);