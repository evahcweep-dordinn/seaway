const Discord = require('discord.js');
const client = new Discord.Client();

const logs = '866618699959763014'
var prefix = ';'

function simpleEmbed(hex,title,Description,ftitle,ftext,footer,inline){
	const Temp = new Discord.MessageEmbed()
	.setColor(hex)
	.setTitle(title)
	.setDescription(Description)
	.addField(ftitle, ftext, inline)
	.setFooter(footer)
	.setTimestamp()
	return Temp
}

function error_c(_errorMsg,_ecode){
	if (_ecode !== "CAUGHT") {
	return simpleEmbed("#FF5E33","Error-" + _ecode,"Command Error","There has been an error.",_errorMsg, 'If this persists, contact Jrous#1904', false);
	} else {

		
		var mention = '356919501322846220'
	 return simpleEmbed("#ff3333","Error-"+_ecode,"Unhandled Exception","An error has been caught.",`<@${mention}> Caught: ${_errorMsg}`,'Please contact Jrous#1904', false);
	}

}

client.on('ready', () => {
    console.log('Bot is now up and running!');
    client.user.setActivity("SeawayGens.minehut.gg", {
        type: "PLAYING",
    })
})
client.on('message', (message) => {

    if (message.author.bot) return; // EWWWW NASTY BOT MESSAGEEWWERERRG GRBHKGHJFHJNH
    if (!message.content.startsWith(prefix)) return;
        const commandBody = message.content.slice(prefix.length);
         const args = commandBody.split(' ');
         const command = args.shift().toLowerCase();

         if (command === "version") {
         message.channel.send('**Seaway Gens Bot**\n🟢 Online\n🛠 *Running Seaway Gens bot main build Version 1.1.2*')
         message.client.channels.cache.get(logs).send('Version command executed by ' + message.author.id);
         }
         if (command === "8ball") {
            var rand = ['Yes.', 'No.', 'Why are you even trying?', 'What do you think? NO!', 'Maybe...', 'Never.', 'Yep.', 'Uhhhhh nah.', 'Hell no!', 'Yeah totally!', 'Idk about that one.', "I'm gonna have to say no to that one...", 'Probably not', 'Sorry but.... no', "Don't go and cry to your mommy but.... it's a no from me.", 'Of course!', 'Ooooo yeah', "It's a yes from me.", 'HELL YEAH!', 'ha ha ha...... yeah', 'Imma just say yeah', 'frick yeah', 'nononono', 'Mhm', 'yes yes yes'];
            var yesOrNo = rand[Math.floor(Math.random()*rand.length)];
            message.channel.send(yesOrNo)
            message.client.channels.cache.get(logs).send('8ball command executed by ' + message.author.id);
            }
            if (command === "punch") {
                message.channel.send('*Punches* ' + message.content.split(' ').slice(1).join(' ') + ' https://media.giphy.com/media/Wi3M59j5QkFl6/giphy.gif')
            }
            if (command === "lick") {
                message.channel.send('*Licks* ' + message.content.split(' ').slice(1).join(' ') + ' https://media.giphy.com/media/BofJb4WxJnz7jFfxeD/giphy.gif')
        }
            if (command === "chiken") {
                message.channel.send('*ur mom* https://media.giphy.com/media/l4FGBurtN1vrkWm5y/giphy.gif')
        }
            if (command === "urmomify") {
                message.channel.send('*Urmomifys* ' + message.content.split(' ').slice(1).join(' ') + ' https://media1.tenor.com/images/01e12b4401d15112a470a51b5ec60665/tenor.gif?itemid=19665250')
            }
            if (command === "murder") {
                message.channel.send('*Murders* ' + message.content.split(' ').slice(1).join(' ') + ' https://media.giphy.com/media/9tXn7DEOsjifNDEenF/giphy.gif')
            }
        
            if (command === "eat") {
                message.channel.send('*Eats* ' + message.content.split(' ').slice(1).join(' ') + ' https://tenor.com/wZHA.gif')
            }
            if (command === "commands") {
                const embed = new Discord.MessageEmbed()
                .setTitle('Commands')
                .addField('Commands', ';8ball (question) \n;version \n;urmomify (user) \n;punch (user) \n;eat (user) \n;murder (user) \n;chiken \n;lick (user)')
                .setColor(0x6493FF )
                .setThumbnail(message.guild.iconURL)
                .setFooter('Bot coded by Jrous.')
                .setTimestamp();
                message.channel.send(embed);
            }

        })


         client.login('ODY0MjE0MTk3OTU3MDM0MDM0.YOyMMQ.086RnxF_8yjdW58H15J5yM3uiJQ');
// client.login(process.env.TOKEN);
