/**
 * Created by amoreno on 06/05/2015.
 */
function zopim_chat(){
    $('[__jx__id], embed#__zopnetworkswf').remove();
    window.$zopim = null;
    (function(d,s){
        var z = $zopim = function(c){
            z._.push(c)
        }, $ = z.s = d.createElement(s), e = d.body.getElementsByTagName(s)[0];
        z.set = function(o){
            z.set._.push(o)
        };
        z._ = [];
        z.set._ = [];
        $.async = !0;
        $.setAttribute('charset','utf-8');
        $.src = '//v2.zopim.com/?3HmAS04FBVeCdugvc2tqLDxbIspmlraq';
        z.t = +new Date;
        $.type = 'text/javascript';
        e.parentNode.insertBefore($,e)
    })(document,'script');
    $zopim(function() {
        $zopim.livechat.window.hide();
        $zopim.livechat.button.show();
    });
}

$(document).on("ready page:load", function() {

   if ($('.contentsLayout').length>0){

    }
    else{
       zopim_chat();
   }

});