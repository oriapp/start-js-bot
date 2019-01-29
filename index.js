const discord = require ('discord.js');

var client = new discord.Client();

const token = "Your-TOKEN-Here";

function catcErr (err, meesage) {
    client.user.get("Your-ID-Here").send ("here was an error at channel " + message.channel + "in guild " + message.guild);
    client.user.get("Your-ID-Here").send ("ERROR ```" + err + "```");
}


client.on ("ready", () => {
    console.log ("ready!");

    ///Set Game On Start

    client.user.setGame ("I'm Online | staffbot.xyz" );
});

/// Welcome Role On join (start)

client.on ("guildMemberAdd", member=> {

    var role = member.guild.roles.find ("name", "testRole");
    member.addRole (role);

})

client.on ("guildMember", member => {

})

/// Welcome Role On join (end)



/// Prefix And More >>
const prefix = "x!";
client.on ("message", (message) => {

    if (message.author.bot) return; 

    msg = message.content.toLocaleLowerCase();

    if (msg.startsWith (prefix + "help")) {
        message.reply ('Hey !');

    message.channel.send ("message: " + message);
    message.channel.send ("message sender: " + message.author.username);
    message.channel.send ("meesage sender ID: " + message.author.id);
    }


    ///If message "rcn" after 3000mili command deleted

    if (msg.startsWith ("rcn")) {
        message.delete (3000);
        message.reply ("Hey! here ").then(d_msg => { d_msg.delete(3000); });
    }

    if (msg.startsWith(prefix + "myprofile")) {
    message.reply(message.author.displayAvatarURL);
    }
    
    
    
    if (msg.startsWith(prefix + "msginfo")) {
    message.channel.send ("message: " + message);
    message.channel.send ("message sender: " + message.author.username);
    message.channel.send ("message sender ID: " + message.author.id);
    message.channel.send("`message sender created at:` " + message.author.createdAt);
    message.channel.send("message: " + message.author.displayAvatarURL);
    }
    
    ///Test Embed Message
    if (msg.includes (prefix + "embed")) {
        embed = new discord.RichEmbed ()
        .setAuthor("Hello! this is a embed message author.")
        .setDescription("Hello this is the description of the embed message.")
        .setFooter("Hyo! this embed was create by R C N#0001")
        .setThumbnail("https://images-ext-2.discordapp.net/external/LneFE7tDVeaN9W1zOia52UsTRSyo_jHcKWbZuk3fqKo/https/cdn.discordapp.com/avatars/438323705668567050/54abc5129c17fb30bf84fd6af39a065d.png")
        .setColor("RANDOM")
        message.channel.send (embed);

        ///Add Role By Command
        if (msg.startsWith(prefix + "role") && message.member.hasPermission("MANAGE_ROLES")) {
            messageSplit = message.content.split (" ", 3);
            roleName = messageSplit(" ", 1);
            roleColor = messageSplit[2].toUpperCase();
            addRolePerson = message.member;
            if (mention != null) { addRolePerson = message.guild.member(mention); 
            message.guild.createRole ( { 
                name: roleName,
                color: roleColor,
                mentionable: true,
            }).then(role => addRolePerson.addRole(role));
        }
        
    }

    ///Send DM Message On Error

    try {

        if (msg.startsWith ("hello")) {
            message.reply("Hey 11")
        }
    }


    catch (err) {
        catchErr(err, message);
    }

    

    

}});
client.login(token); 
