var Discord = require('discord.io');

var logger = require('winston');

var auth = require('./auth.json');

// Configure logger settings

logger.remove(logger.transports.Console);

logger.add(new logger.transports.Console, {

colorize: true
});

logger.level = 'debug';

// Initialize Discord Bot

var bot = new Discord.Client({

token: auth.token,

autorun: true

});

bot.on('ready', function (evt) {

logger.info('Connected');

logger.info('Logged in as: ');

logger.info(bot.username + ' - (' + bot.id + ')');
});

bot.on('message', function (user, userID, channelID, message, evt) {

// Our bot needs to know if it will execute a command

// It will listen for messages that will start with `!`

if (message.substring(0, 1) == '|') {

    var args = message.substring(1).split(' ');

    var cmd = args[0];


    args = args.splice(1);

    switch(cmd) {
		
        // |test
		
		case 'test':

            bot.sendMessage({

                to: channelID,

                message: 'Hello World!'

            });

        break;
		
        // |helloworld
		
		case 'helloworld':

            bot.sendMessage({

                to: channelID,

                message: 'Hello World!'

            });

        break;
				
        // |sfvryu

        case 'sfvryu':
		case 'sf5ryu':

            bot.sendMessage({

                to: channelID,

                message: 'https://game.capcom.com/cfn/sfv/character/ryu/frame/table'

            });

        break;
		
        // |sfvken

        case 'sfvken':
		case 'sf5ken':

            bot.sendMessage({

                to: channelID,

                message: 'https://game.capcom.com/cfn/sfv/character/ken/frame/table'

            });

        break;
				
        // |sfvchun-li

        case 'sfvchun-li':
		case 'sf5chun-li':
		case 'sfvchunli':
		case 'sf5chunli':
		case 'sfvchun':
		case 'sf5chun':

            bot.sendMessage({

                to: channelID,

                message: 'https://game.capcom.com/cfn/sfv/character/chun-li/frame/table'

            });

        break;
				
        // |workshop
		
		case 'workshop':

            bot.sendMessage({

                to: channelID,

                message: 'Workshop characters aren\'t implemented into Mentorbot 3.0, so this serves as an easy access way of viewing the document. \n https://docs.google.com/spreadsheets/d/19UtK7xG2c-ehxdlhCFKMpM4_IHSG-EXFgXLJaunE79I'

            });

        break;
						
        // |hodan
		
		case 'hodan':
		case 'hod':
		case 'monke':
		case 'stinky':
		case 'monkey':

            bot.sendMessage({

                to: channelID,

                message: 'Workshop characters aren\'t implemented into Mentorbot 3.0, so this serves as an easy access way of viewing Hodan\'s moves and frame data. \n https://docs.google.com/spreadsheets/d/19UtK7xG2c-ehxdlhCFKMpM4_IHSG-EXFgXLJaunE79I/edit#gid=1279788734'

            });

        break;
						
        // |mollo
		
		case 'mollo':
		case 'mol':

            bot.sendMessage({

                to: channelID,

                message: 'Workshop characters aren\'t implemented into Mentorbot 3.0, so this serves as an easy access way of viewing Mollo\'s moves and frame data. \n https://docs.google.com/spreadsheets/d/19UtK7xG2c-ehxdlhCFKMpM4_IHSG-EXFgXLJaunE79I/edit#gid=337491709'

            });

        break;
								
        // |olympia
		
		case 'olympia':
		case 'oly':

            bot.sendMessage({

                to: channelID,

                message: 'Workshop characters aren\'t implemented into Mentorbot 3.0, so this serves as an easy access way of viewing Olympia\'s moves and frame data. \n https://docs.google.com/spreadsheets/d/19UtK7xG2c-ehxdlhCFKMpM4_IHSG-EXFgXLJaunE79I/edit#gid=1865402036'

            });

        break;
										
        // |pomme
		
		case 'pomme':
		case 'pom':

            bot.sendMessage({

                to: channelID,

                message: 'Workshop characters aren\'t implemented into Mentorbot 3.0, so this serves as an easy access way of viewing Pomme\'s moves and frame data. \n https://docs.google.com/spreadsheets/d/19UtK7xG2c-ehxdlhCFKMpM4_IHSG-EXFgXLJaunE79I/edit#gid=216747637'

            });

        break;
		
     }

 }
});
