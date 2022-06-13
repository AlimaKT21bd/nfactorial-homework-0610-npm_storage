$('document').ready(function() {
    $("#story1").hide();

    $(".btn_click").click(function(e) {
        e.preventDefault();

        $(".person").empty().append($("input.person").val());
        $(".character").empty().append($("input.character").val());
        $(".adverb").empty().append($("input.adverb").val());
        $(".adjective").empty().append($("input.adjective").val());
    
        $("#story1").show();

        $(":input").val("");
    
    })

    $("#size2").hide();

    $(".btn_click2").click(function(e) {
        e.preventDefault();

        let w = $(".wdth").val();
        let h = $(".hght").val();
        let n = $(".numb").val();
        

        let ans = (w * h * n)/8/1000;

        $(".size1").empty().append(ans);

        $("#size2").show();

        $(":input").val("");
    
    })


})

