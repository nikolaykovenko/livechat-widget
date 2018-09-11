class Greeting {
    constructor() {
        this.greetingsList = [
            'Hello, my dear friend',
            'This is our first livechat app. Greatings to you!',
            'Templamonster is the greatest company',
        ];
    };


    getRandom() {
        return this.greetingsList[Math.floor(Math.random() * this.greetingsList.length)];
    };
}