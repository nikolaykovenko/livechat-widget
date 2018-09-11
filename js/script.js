LiveChat.init();

// listen to customer profile change event from LiveChat Agent App
LiveChat.on('customer_profile', function( data ) {
    console.log(data);
});

$(function() {
    $('#hello-button').click(function () {
        const greeting = new Greeting();
        console.log(greeting.getRandom());

        console.log(LiveChat);
        console.log(LiveChat.getSessionId());
        LiveChat.putMessage("Hello! This message comes from the App Widget. Press enter to send it!");
    });
});
