/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function(){
    var $sequence = $("#year .months");
    $("span.fall").hide();
    $("span.spring").hide();
    $("span.summer").hide();

    $("#springSelect").click(function(){
        $(".spring").show();
        $(".fall").hide();
        $(".summer").hide();
        var springOrder = [4, 5, 6, 7, 8, 9, 10, 11, 0, 1, 2, 3];
        var springSequence = document.getElementById("year");
        for (var i = 0, l = springOrder.length; i < l; i++) {
            springSequence.appendChild($sequence.get(springOrder[i]));
        };

    });

    $("#fallSelect").click(function(){
        $(".fall").show();
        $(".spring").hide();
        $(".summer").hide();
        var fallOrder = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
        var fallSequence = document.getElementById("year");
        for (var i = 0, l = fallOrder.length; i < l; i++) {
            fallSequence.appendChild($sequence.get(fallOrder[i]));
        };
    });

    $("#summerSelect").click(function(){
        $(".summer").show();
        $(".fall").hide();
        $(".spring").hide();
    });

    $("#allSelect").click(function(){
        $(".summer").show();
        $(".fall").show();
        $(".spring").show();
        $("span.summer").hide();
        $("span.fall").hide();
        $("span.spring").hide();
        var fallOrder = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
        var fallSequence = document.getElementById("year");
        for (var i = 0, l = fallOrder.length; i < l; i++) {
            fallSequence.appendChild($sequence.get(fallOrder[i]));
        };
        
    });
});