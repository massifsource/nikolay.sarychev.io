 
        function Anchor(active){
            if(active==true){
                var hash=window.location.hash;
                if(hash){
                    $("#menu a").removeClass("active");
                    $("a[href="+hash+"]").addClass("active");
                }
                
            }
             
            function AnchorHref(){
                    var anchor=$(this);
                    if(hash){
                        $("#menu a").removeClass("active");
                       anchor.addClass("active");
                        
                }
                $("html, body").animate({
                    scrollTop: $(anchor.attr("href")).offset().top
                }, 1000);
            }
            $("a[href*=#]").click(AnchorHref);
        }
        Anchor(true);

        