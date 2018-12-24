const Discord = require("discord.js");
const client = new Discord.Client();

client.on('guildMemberAdd', member => {
const Mahmoud= member.guild.channels.get("512674548382957573");
if(!Mahmoud) return;
if(Mahmoud) {
setTimeout(() => Mahmoud.send(`**#Welcome To __ - Mal Shop__:rose: :heart:**`), 4000)        
}
});

client.on('guildMemberAdd', member => {
const Mahmoud= member.guild.channels.get("513381450448371712");
if(!Mahmoud) return;
if(Mahmoud) {
setTimeout(() => Mahmoud.send(`**Welcome To __ # - Malicious™ <#526439848358313985> <#526458663506804745> <#526436602533380096> __:rose: :fire:   **`), 4000)        
}
});






   
client.login(process.env.BOT_TOKEN);
