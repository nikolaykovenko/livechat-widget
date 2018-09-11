var LiveChat = LiveChat || {};
LiveChat.init();

$(function() {
    $('#hello-button').click(function () {
        const greeting = new Greeting();
        console.log(greeting.getRandom());

        console.log(LiveChat);
        console.log(LiveChat.getSessionId());

        console.log(LiveChat.getSessionId());
        LiveChat.putMessage("Hello! This message comes from the App Widget. Press enter to send it!");
    });
});
