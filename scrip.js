

$(document).ready(function () {
    $(".body2 ul li a").click(function () {
        $(this).parent().addClass("active");
        $(this).parent().siblings().removeClass("active");

        var tab = $(this).attr("href");

        $(".tabcontent").not(tab).css("display", "none");
        $(tab).css("width", "100%");
        $(tab).css("height", "100%");
        $(tab).fadeIn();
    })
    $(".backtop").fadeOut();
    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $(".backtop").fadeIn();
        } else {
            $(".backtop").fadeOut();

        }
        // ======nav======
        if ($(this).scrollTop()) {
            $(".item1 img").css("width","60px");
            $(".item1 img").css("height","70%");
            $(".navigation").css("box-shadow","0 0 7px #385B50");
            $(".item1 p").css("font-size","10px");
            $(".item1 nav").css("margin-top","1%");

        } else {
          

            $(".item1 img").css("width","100px");
            $(".item1 img").css("height","100%");
             $(".item1 p").css("font-size","20px");
             $(".navigation").css("box-shadow","initial");
             $(".item1 nav").css("margin-top","3%");
          

        }
        // ===========nav part 2===============
        const lv1 = 580;
        const lv2 = 1190;
        const lv3 = 1950;
        const lv4 = 2550;
        const lv5 = 3400;
        
        
        if(lv5<$(this).scrollTop()){

            console.log("co 5");
            $(".mn5 a").parent().addClass("menuActive");
            $(".mn5 a").parent().siblings().removeClass("menuActive");

        } else if(lv4<$(this).scrollTop()){

            console.log("co 4");
            $(".mn4 a").parent().addClass("menuActive");
            $(".mn4 a").parent().siblings().removeClass("menuActive");

        }else if(lv3<$(this).scrollTop()){

            console.log("co 3");
            $(".mn3 a").parent().addClass("menuActive");
            $(".mn3 a").parent().siblings().removeClass("menuActive");

        }else if(lv2<$(this).scrollTop()){

            console.log("co 2");
            $(".mn2 a").parent().addClass("menuActive");
            $(".mn2 a").parent().siblings().removeClass("menuActive");

        }else if(lv1<$(this).scrollTop()){

            console.log("co 1");
            $(".mn1 a").parent().addClass("menuActive");
            $(".mn1 a").parent().siblings().removeClass("menuActive");

        } else{

            $(".menubar ul li").removeClass("menuActive");

        }

    })

})



function chuan() {

    var ten = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var tuoi = document.getElementById("tuoi").value;
    var check = 0;

    document.getElementById("email").eq

    if (ten && email && tuoi) {
        check = 1;

    }
    if (check == 1) {

        $(document).ready(function () {
            $("#camket").ready(function () {

                $("form").fadeOut();
                $(".an").css("display", "block");
                $(this).unload();


            })



        })

    }


}

