$(document).ready (function(){
    $("#accordion .card .card-link").click(function(){
        if($(this).find("i.fa").hasClass("fa-plus"))
        {
            $(this).find("i.fa").removeClass("fa-plus");
            $(this).find("i.fa").addClass("fa-minus");
        }
        else if($(this).find("i.fa").hasClass("fa-minus"))
        {
            $(this).find("i.fa").removeClass("fa-minus");
            $(this).find("i.fa").addClass("fa-plus");
        }

        $(this).parents(".card").siblings().find(".card-header .card-link i.fa").removeClass("fa-plus");
        $(this).parents(".card").siblings().find(".card-header .card-link i.fa").removeClass("fa-minus");

    }); 
});