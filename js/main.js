$(document).ready(function(){	

    customHandlers["toSubject"] = function(el){
        var title = el.parents("li").find("h3").text();
        $(el.attr("data-block")).find("input[name='1']").val(title);
        $(el.attr("data-block")).find("input[type='text']").eq(0).focus();
    }

});