
const Discord = require("discord.js");

const client = new Discord.Client();
client.on("message", async (msg) => {
  
  
  if (msg.content.startsWith('%chansey')) {
    var role = msg.guild.roles.find(role => role.name === "CHANSEY");
    msg.member.addRole(role);
    
  }
  
  
 
  

  
  //----
  
  
    let notif="";

  
  if(msg.content.startsWith('5ovos')){
    
    let autor=msg.author;
   
     let pokestop =  msg.content.split(" ").slice(1).join(" ");
 // let roleName = msg.content.split(" ").slice(1).join(" ");
let roleName ="CHANSEY";
  //Filtering the guild members only keeping those with the role
  //Then mapping the filtered array to their usernames
  let membersWithRole = msg.guild.members.filter(member => { 
     
      return member.roles.find("name", roleName);
  }).map(member => {
  //  msg.guild.channels.find("name", "quest-info").sendMessage(member.user+"\n")
    // msg.guild.channels.find("name", "quest-info").sendMessage(client.users.find(member.user.username, "mensagem").toString())
    
   
    
    // member.user.send("lkjlkjk");
   
    msg.sendMessage("dddd");
    
    
    
    
    
    
    
  
  })
  
  

 const embed = new Discord.RichEmbed()
                .setTitle(pokestop)
                .setAuthor("POKESTOP", "https://exraidspinhalnovo.webnode.pt/_files/200000044-1157e1263e/450/pstop.png")
                /*
                 * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
                 */
                .setColor(0x00AE86)
                .setDescription("CHOCAR 5 OVOS - Chansey")
                .setFooter("Pubicado ", "")


                .setThumbnail("https://exraidspinhalnovo.webnode.pt/_files/200000043-cd4a1ce43f/450/chansey.png")

                .setTimestamp();
  
   msg.guild.channels.find("name", "quest-info").sendMessage({ embed });
  
  
}
  
  
  //----
  
  
  
  });

client.login(process.env.BOT_TOKEN);
