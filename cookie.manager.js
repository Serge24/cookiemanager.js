
var CookieManager={};

CookieManager=function(){
    var getcookie= function(name){
        var cookies = document.cookie.split(";");
        if(cookies.length ==  0){
            return null;
        }else{
            for(var ip = 0;ip<cookies.length;ip++){
                var cookieInfo = cookies[ip].split("=");
                if(cookieInfo[0].trim()==name){
                    var cookie = new Object();

                    cookie.name = cookieInfo[0];
                    cookie.value = cookieInfo[1];
                    return cookie;
                }
            }
            return null;
        }
    };

    var getcookies = function(){
        var cookies = document.cookie;

        if(cookies != ""){
            cookies = cookies.split(";");
            var cookiesArray = new Array(cookies.length);

            for(var ip = 0; ip<cookies.length;ip++){
                var cookie=new Object();
                var cookieInfo= cookies[ip].split("=");
                cookie.name = cookieInfo[0];
                cookie.value = cookieInfo[1];
                cookiesArray[ip]=cookie;
            }
            return cookiesArray;
        }
        return null;
    }
};

function cookie(){
    if(cookie.arguments.length>0){
        if(cookie.arguments.length==1){
            return CookieManager.getcookie(cookie.arguments[0]);
        }else{
            document.cookie=cookie.arguments[0]+"="+cookie.arguments[1];
            return CookieManager.getcookie(cookie.arguments[0]);
        }
    }else{
        return CookieManager.getcookies();
    }
}
