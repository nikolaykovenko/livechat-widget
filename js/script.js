LiveChat.init();

// listen to customer profile change event from LiveChat Agent App
LiveChat.on('customer_profile', function( data ) {
    console.log(data);
});

LiveChat.putMessage("Hello! This message comes from the App Widget. Press enter to send it!");
LiveChat.getSessionId();

