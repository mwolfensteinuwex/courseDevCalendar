/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function(){
    $("span.fall").hide();
    $("span.spring").hide();
    $("span.summer").hide();
});

$(document).ready(function(){
    $("#springSelect").click(function(){
        $(".spring").show();
        $(".fall").hide();
        $(".summer").hide();
        $("#may").insertBefore("#jan");
        $("#jun").insertAfter("#may");
        $("#jul").insertAfter("#jun");
        $("#aug").insertAfter("#jul");
        $("#sep").insertAfter("aug");
        $("#oct").insertAfter("#sep");
        $("#nov").insertBefore("#jan");
        $("#dec").insertBefore("#jan");
        
        
        




    });
});

$(document).ready(function(){
    $("#fallSelect").click(function(){
        $(".fall").show();
        $(".spring").hide();
        $(".summer").hide();
    });
});

$(document).ready(function(){
    $("#summerSelect").click(function(){
        $(".summer").show();
        $(".fall").hide();
        $(".spring").hide();
    });
});

$(document).ready(function(){
    $("#allSelect").click(function(){
        $(".summer").show();
        $(".fall").show();
        $(".spring").show();
        $("span.summer").hide();
        $("span.fall").hide();
        $("span.spring").hide();
    });
});