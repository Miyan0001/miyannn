//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +6283890667327
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs')
const chalk = require('chalk')

//owmner v card
global.ytname = "YouTube: Ｍｉｙａｎ" //ur yt chanel name
global.socialm = "GitHub: Ｍｉｙａｎ" //ur github or insta name
global.location = "Indonesia, West Java, North Jakarta" //ur location


//new
global.botname = 'Ｍｉｙａｎ' //ur bot name
global.ownernumber = '6283890667327' //ur owner number
global.ownername = 'Ｍｉｙａｎ' //ur owner name
global.websitex = "https://youtube.com/@Miyan0001"
global.wagc = "https://whatsapp.com/channel/0029Vad4tBB1noz9keqWtI0I"
global.themeemoji = '🪀'
global.wm = "Ｍｉｙａｎ　Ｉｎｃ"
global.botscript = 'https://github.com/Miyan0001/' //script link
global.packname = `【﻿Ｍｉｙａｎ　Ｉｎｃ．】`

global.author = ``
global.creator = "6283890667327@s.whatsapp.net"
global.xprefix = '!'
global.premium = ["6283890667327"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v12' // menu type 'v1' => 'v12'
global.typereply = 'v2' // reply type 'v1' => 'v4'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.antiswview = true //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable, Or you can private chat with me',
    done: 'Done✓',
    error: 'Error!',
    success: 'Here you go!'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

//text bug
global.xbugtex = {
xtxt: '🚨Ｍｉｙａｎ🚨',
}
global.bimg = ''

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})