LiveChat.init();

// listen to customer profile change event from LiveChat Agent App
LiveChat.on('customer_profile', function( data ) {
    console.log(data);
});

$(function() {
    $('#hello-button').click(function () {
        const greeting = new Greeting();
        LiveChat.putMessage(greeting.getRandom());
    });
});
