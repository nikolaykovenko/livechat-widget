$(function() {
    $('#hello-button').click(function () {
        const greeting = new Greeting();
        console.log(greeting.getRandom());

        const LiveChat = LiveChat || {};
        LiveChat.init();
        LiveChat.putMessage("Hello! This message comes from the App Widget. Press enter to send it!");
    });
});
