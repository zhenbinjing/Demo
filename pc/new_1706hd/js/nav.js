var url_huodong = window.location.pathname;

document.writeln("<style>");

document.writeln("/*sideNav*/");

document.writeln(".sideNav_hd{");

document.writeln("    position: fixed;");

document.writeln("    width: 78px;");

document.writeln("    height: 485px;");

document.writeln("    left: 50%;");

document.writeln("    top: 50%;");

document.writeln("    -webkit-transform: translate(-685px,-224px);");

document.writeln("    transform: translate(-685px,-224px);");

document.writeln("    z-index:15;");

document.writeln("}");

document.writeln("");

document.writeln(".sideNav_hd a{");

document.writeln("    display: block;");

document.writeln("    width: 78px;");

document.writeln("    height: 54px;");

document.writeln("    margin-bottom:1px;");

document.writeln("    background-color: #6285a8;");

document.writeln("    background-image: url(img/nav.png);");

document.writeln("    -webkit-transition:opacity 1.2s, transform 0.4s;");

document.writeln("    transition:opacity 1.2s, transform 0.4s;");

document.writeln("    -webkit-transform: translateX(-100%);");

document.writeln("    transform:translateX(-100%);");

document.writeln("    opacity: 0;");

document.writeln("}");

document.writeln(".sideNav_hd a:first-child{");

document.writeln("    background-color: #018f71;");

document.writeln("}");

document.writeln(".sideNav_hd a:last-child{");

document.writeln("    background-color: #93a9c0;");

document.writeln("}");

document.writeln(".sideNav_hd a:hover{");

document.writeln("    background-color: #018f71;");

document.writeln("}");

document.writeln(".sideNav_hd a.on{");

document.writeln("    -webkit-transform: translateX(0);");

document.writeln("    transform: translateX(0);");

document.writeln("    opacity: 1;");

document.writeln("}");

document.writeln("</style>");

document.writeln("<!--sideNav-->");

document.writeln("<div class=\'sideNav_hd\'>");

document.writeln("    <a onclick=\"openZoosUrl();return false;\" href=\"javascript:void(0);\"></a>");

document.writeln("    <a onclick=\"openZoosUrl();return false;\" href=\"javascript:void(0);\"></a>");

document.writeln("    <a onclick=\"openZoosUrl();return false;\" href=\"javascript:void(0);\"></a>");

document.writeln("    <a onclick=\"openZoosUrl();return false;\" href=\"javascript:void(0);\"></a>");

document.writeln("    <a onclick=\"openZoosUrl();return false;\" href=\"javascript:void(0);\"></a>");

document.writeln("    <a onclick=\"openZoosUrl();return false;\" href=\"javascript:void(0);\"></a>");

document.writeln("    <a onclick=\"openZoosUrl();return false;\" href=\"javascript:void(0);\"></a>");

document.writeln("    <a onclick=\"openZoosUrl();return false;\" href=\"javascript:void(0);\"></a>");


if(url_huodong == "/item/new_1705cx/"){

	document.writeln("<a onclick=\'openZoosUrl();return false; \' href=\'javascript:void(0);\' target=\'_blank\'></a>");

}else{

		document.writeln("<a  href=\'/item/new_1706hd/\' target=\'_blank\'></a>");

	}

document.writeln("</div>");

        $(".sideNav_hd a").each(function (i,ele) {

            $(ele).css({

                backgroundPositionY:-54*i,

                webkitTransitionDelay:(0.1*i)+'s',

                transitionDelay:(0.1*i)+'s'

            })

        })



        var h=600,num=0;

        $(window).scroll(function(event){

            var i=0;

            num=$(document).scrollTop();

            if(num>h){

                $(".sideNav_hd a").addClass("on");

            }else{

                $(".sideNav_hd a").removeClass("on");

            }

        });
