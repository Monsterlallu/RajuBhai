const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://www.linkpicture.com/q/PicsArt_12-10-01.32.23.jpg";
  r_text[1] = "https://www.linkpicture.com/q/PicsArt_12-10-01.32.23.jpg";   
  r_text[2] = "https://www.linkpicture.com/q/PicsArt_12-10-01.32.23.jpg";   


    var i = Math.floor(3*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*πππππππ ππ πππππππ πππππ*


βοΈ *α΄α΄ α΄Κα΄α΄α΄ α΄α΄α΄α΄α΄α΄ α΄Κα΄α΄ .α΄α΄α΄α΄α΄α΄*



βοΈ *Κα΄α΄‘ α΄α΄ α΄α΄α΄α΄α΄α΄ .α΄α΄α΄α΄α΄α΄ Ι΄α΄α΄‘*



βοΈ *Κα΄α΄‘ α΄α΄ α΄α΄α΄α΄ Κα΄α΄ : https://youtu.be/4mWfR23qFuA .*



βοΈ *Κα΄α΄‘ α΄α΄ α΄α΄α΄α΄ Κα΄Κα΄α΄α΄ α΄α΄α΄α΄α΄Ι΄α΄ : https://youtu.be/6XqkkTfAriQ .*



βοΈ *Ι’Ιͺα΄Κα΄Κ ΚΙͺΙ΄α΄ : http://www.github.com/Monsterlallu/RajuBhai .*



βοΈ *α΄α΄α΄Ιͺα΄ α΄α΄α΄α΄α΄Ι΄α΄s : https://github.com/Monsterlallu/RajuBhai/tree/master/uploads .*



βοΈ *sα΄Ιͺα΄α΄α΄Κ α΄α΄α΄α΄α΄Ι΄α΄s : https://github.com/Monsterlallu/RajuBhai/tree/master/sticker .*



βοΈ *α΄‘Κα΄α΄sα΄α΄α΄ Ι’Κα΄α΄α΄ : https://chat.whatsapp.com/JCDXgSphA49EHxjPn813IL .*



βοΈ *α΄α΄‘Ι΄α΄Κ : wa.me/917736129238?&text=ΚΙͺ%20monsterlallu-β€οΈ-*

*βΈοΈ2021 MONSTERLALLU*


`}) 

}));
