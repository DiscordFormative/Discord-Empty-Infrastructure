const Discord = require("discord.js")    
const client = new Discord.Client();       
const config = require("./config.js")   
const fs = require("fs");                
require('./util/Loader.js')(client);    

client.commands = new Discord.Collection(); 
client.aliases = new Discord.Collection();  
fs.readdir('./plugins/', (err, files) => { 
  if (err) console.error(err);               
  files.forEach(f => {                      
    let props = require(`./plugins/${f}`);   
    client.commands.set(props.config.name, props); 
    props.config.aliases.forEach(alias => {         
      client.aliases.set(alias, props.config.name);  
    });
  });
})

client.login(config.token)


//----------Bot Status----------\\

var prefix = config.prefix

var owner = config.owner

var ownerdiscord = config.ownerdiscord


client.on('ready', () => {
console.log("================================")
console.log(`${client.user.username} Starting...`)
console.log("================================")

console.log("Bot's Token Verified")  
console.log("All Commands Activated")
console.log("The Main System of the Bot is Controlled")
console.log("Bot Status Activated")
console.log(`The prefix is ​​set to ${prefix}`)
console.log(`The Person Who Designed the Bot || ${owner} ||`) 
console.log(`Our Help Server ${ownerdiscord}`)

  
client.user.setActivity(`Discord`, {
type: "STREAMING",
url: "https://www.twitch.tv/ibplus01"})
    .then(presence => console.log(``))
    .catch(console.error);
});

//-- var owner = config.owner --\\ //-- Do Not Change Owner Code In config.js File --\\

//-- var owner = config.ownerdiscord --\\ //-- Do Not Change OwnerDiscord Code In config.js File --\\


//----------The Creator of This Code is iBPlus----------\\

