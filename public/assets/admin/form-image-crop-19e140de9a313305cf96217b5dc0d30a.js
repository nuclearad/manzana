var FormImageCrop=function(){var n=function(){$("#demo1").Jcrop()},o=function(){function n(n){$("#x1").val(n.x),$("#y1").val(n.y),$("#x2").val(n.x2),$("#y2").val(n.y2),$("#w").val(n.w),$("#h").val(n.h)}function o(){$("#coords input").val("")}var e;$("#demo2").Jcrop({onChange:n,onSelect:n,onRelease:o},function(){e=this}),$("#coords").on("change","input",function(n){var o=$("#x1").val(),a=$("#x2").val(),t=$("#y1").val(),i=$("#y2").val();e.setSelect([o,t,a,i])})},e=function(){function n(n){if(parseInt(n.w)>0){var o=c/n.w,t=p/n.h;r.css({width:Math.round(o*e)+"px",height:Math.round(t*a)+"px",marginLeft:"-"+Math.round(o*n.x)+"px",marginTop:"-"+Math.round(t*n.y)+"px"})}}var o,e,a,t=$("#preview-pane"),i=$("#preview-pane .preview-container"),r=$("#preview-pane .preview-container img"),c=i.width(),p=i.height();console.log("init",[c,p]),$("#demo3").Jcrop({onChange:n,onSelect:n,aspectRatio:c/p},function(){var n=this.getBounds();e=n[0],a=n[1],o=this,t.appendTo(o.ui.holder)})};return{init:function(){jQuery().Jcrop&&(n(),o(),e())}}}();