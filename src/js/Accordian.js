$(document).ready (function(){
    $("#accordion .card .card-link").click(function(){
        if($(this).find("i.bi").hasClass("bi-plus"))
        {
            $(this).find("i.bi").removeClass("bi-plus");
            $(this).find("i.bi").addClass("bi-minus");
        }
        else if($(this).find("i.bi").hasClass("bi-minus"))
        {
            $(this).find("i.bi").removeClass("bi-minus");
            $(this).find("i.bi").addClass("bi-plus");
        }

        $(this).parents(".card").siblings().find(".card-header .card-link i.bi").removeClass("bi-plus");
        $(this).parents(".card").siblings().find(".card-header .card-link i.bi").removeClass("bi-minus");

    }); 
});