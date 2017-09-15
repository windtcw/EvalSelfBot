// Import the libraries
const Discord = require('discord.js');
const client = new Discord.Client();

// This is what will happen when the bot is turned on
client.on('ready', () => {
        console.log('Loading..\nLoaded...');
});

// This is the message listener.
client.on('message', message => {
	
						// This is the eval cmd it's self
						if (message.content.startsWith("!eval")) {
							if (message.author !== client.user || message.author.id !== '310756245013266433') return;
						try {
							var args = message.content.split(" ").slice(1);
							var code = args.join(" ");
							var evaled = eval(code);
							if (typeof evaled !== "string")
							evaled = require("util").inspect(evaled);
							message.channel.sendCode("xl", clean(evaled));
						} catch (err) {
							message.channel.sendCode("x1", `\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
						}
					}

					// This is a clean method, to make the error messages less spammy
					function clean(text) {
						if (typeof(text) === "string")
							return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
						else
							return text;
					}
});

client.login("Token") // Replace "Token" with your token https://www.youtube.com/watch?v=80k9h62qIPk - DO NOT SHARE YOUR TOKEN WITH ANYONE, NOT EVEN YOUR FRIENDS
