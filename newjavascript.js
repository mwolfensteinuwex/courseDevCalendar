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

$(function() {
    $('input[name=role]:radio').change(function(){
        if( $("#idTasks").is(':checked')) {
            $("div.tasks > .idTask").show();
            $("div.tasks > :not(.idTask)").hide();
        }
        else if( $("#itTasks").is(':checked')) {
            $("div.tasks > .itTask").show();
            $("div.tasks > :not(.itTask)").hide();
        }
        else if( $("#mediaTasks").is(':checked')) {
            $("div.tasks > .mediaTask").show();
            $("div.tasks > :not(.mediaTask)").hide();
        }
        else if ( $("#allTasks").is(':checked')) {
          $(".tasks > p").show();
        };
    });
    });

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
        var summerOrder = [10, 11, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        var summerSequence = document.getElementById("year");
        for (var i = 0, l = summerOrder.length; i < l; i++) {
            summerSequence.appendChild($sequence.get(summerOrder[i]));
        };
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