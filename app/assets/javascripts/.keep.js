

$(document).ready( function() { 
    // Render
    $.ajax({
        type: 'GET',
        url: "../baby-steps.json",
        dataType: 'json',
    })
    .success (function(data) {
        //console.log('Friends', data);
        var friends = data.friends;
        
        var sorted = {};
        for (friend in friends) {
            person = friends[friend]
            //console.log('Friends', person)
            $('#babystep-' + person["babyStep"]).append("<div><span class='friendsName'>" + person["firstName"] + ' ' +  person["lastName"] + "</span></div>");
        }
    });
    
    tabTransition();
});

var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

function tabTransition() {
    $('#tabTrans li').click( function() {
        $(this).addClass('animated slideInDown').one(animationEnd, function() {
            $(this).removeClass('animated slideInDown')
        });
    });
};
   