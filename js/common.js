window.onload = function() {
    $('.loading').remove();
}

$(document).ready(function() {

    $("#demosMenu").change(function(){
      window.location.href = $(this).find("option:selected").attr("id") + '.html';
    });
       
});
