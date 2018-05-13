var restify = require('restify');

var builder = require('botbuilder');

var server=restify.createServer();

var connector = new builder.ChatConnector({
    appId: process.env.MicrosoftAppId,
    appPassword: process.env.MicrosoftAppPassword
});
// Listen for messages from users 
server.post('/api/messages', connector.listen());
server.listen(process.env.port||process.env.PORT||3978,function(){
    console.log('%s listening to %s',server.name,server.url)
})
var bot = new builder.UniversalBot(connector, function (session) {
    if(session.message.text=="Hi"){
        session.send("Hello");
    }
    session.send("You said  d:%s", session.message.text);
});