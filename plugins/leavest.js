const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://bit.ly/3DOgLpP";
  r_text[1] = "https://bit.ly/3cwa8fv";   
  r_text[2] = "https://bit.ly/3lnD2U8";   


    var i = Math.floor(3*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*𝐂𝐑𝐄𝐀𝐓𝐄𝐃 𝐁𝐘 𝐌𝐎𝐍𝐒𝐓𝐄𝐑 𝐋𝐀𝐋𝐋𝐔*


☘︎ *ᴛᴏ ᴄʜᴇᴄᴋ ᴜᴘᴅᴀᴛᴇ ᴛʏᴘᴇ .ᴜᴘᴅᴀᴛᴇ*



☘︎ *ʜᴏᴡ ᴛᴏ ᴜᴘᴅᴀᴛᴇ .ᴜᴘᴅᴀᴛᴇ ɴᴏᴡ*



☘︎ *ʜᴏᴡ ᴛᴏ ᴍᴀᴋᴇ ʙᴏᴛ : https://youtu.be/4mWfR23qFuA .*



☘︎ *ʜᴏᴡ ᴛᴏ ᴍᴀᴋᴇ ʜᴇʀᴏᴋᴜ ᴀᴄᴄᴏᴜɴᴛ : https://youtu.be/6XqkkTfAriQ .*



☘︎ *ɢɪᴛʜᴜʙ ʟɪɴᴋ : http://www.github.com/Monsterlallu/RajuBhai .*



☘︎ *ᴀᴜᴅɪᴏ ᴄᴏᴍᴍᴀɴᴅs : https://github.com/Monsterlallu/RajuBhai/tree/master/uploads .*



☘︎ *sᴛɪᴄᴋᴇʀ ᴄᴏᴍᴍᴀɴᴅs : https://github.com/Monsterlallu/RajuBhai/tree/master/sticker .*



☘︎ *ᴡʜᴀᴛsᴀᴘᴘ ɢʀᴏᴜᴘ : https://chat.whatsapp.com/JCDXgSphA49EHxjPn813IL .*



☘︎ *ᴏᴡɴᴇʀ : wa.me/917736129238?&text=ʜɪ%20monsterlallu-❤︎-*

*Ⓒ︎2021 MONSTERLALLU*


`}) 

}));
