'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
    console.log("finally");
    //initializePage();
})

$(document).on('click','a .projectLink',function(event){
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this,'href')).offset().top
    },'slow');
});


/* function initializePage() {
    //listeners
    $(".project").click(scrollToProject);
    console.log("comeOnNow");
}
*/