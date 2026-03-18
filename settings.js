import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

//* CONFIGURACIÓN PRINCIPAL

global.botNumber = ''

global.owner = [
  ['50671583119', 'Owner', true],
];

// OTROS PERMISOS
global.mods = []
global.suittag = ['50671583119']
global.prems = []

// INFO BOT
global.libreria = 'Baileys'
global.baileys = 'V 6.7.16'
global.languaje = 'Español'
global.vs = '2.2.0'
global.nameqr = 'ellen-joe-bot'
global.namebot = 'Ellen Joe Bot'
global.Ellensessions = 'EllenSessions'
global.jadi = 'EllenJadiBots'
global.EllenJadibts = true

// CONTACTO FAKE
global.fkontak = {
	key: {
		participant: '0@s.whatsapp.net',
		remoteJid: 'status@broadcast'
	},
	message: {
		contactMessage: {
			displayName: `Ellen-Joe Bot`,
			vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;Ellen-Joe Bot;;;\nFN:Ellen-Joe Bot\nitem1.TEL;waid=1234567890:1234567890\nitem1.X-ABLabel:Bot\nEND:VCARD`
		}
	}
};

// API KEYS
global.APIKeys = {};

// STICKERS / NOMBRES
global.packname = 'Ellen'
global.botname = 'Ellen Bot'
global.wm = 'Ellen Bot'
global.author = 'Owner'
global.dev = 'Custom'
global.textbot = 'Bot activo'
global.etiqueta = 'Owner'

// ECONOMÍA
global.moneda = 'Coins'

// BIENVENIDAS
global.welcom1 = 'Bienvenido'
global.welcom2 = 'Adiós'

// IMÁGENES
global.banner = 'https://raw.githubusercontent.com/The-King-Destroy/Adiciones/main/Contenido/1747289219876.jpeg'
global.avatar = 'https://qu.ax/RYjEw.jpeg'

// LINKS (puedes cambiar luego)
global.gp1 = ''
global.comunidad1 = ''
global.channel = ''
global.channel2 = ''
global.md = ''
global.correo = ''
global.cn = ''

// ARCHIVOS
global.catalogo = fs.readFileSync('./src/catalogo.jpg')

// ESTILO MENSAJES
global.estilo = { 
  key: {  
    fromMe: false, 
    participant: `0@s.whatsapp.net`
  }, 
  message: { 
    orderMessage: { 
      itemCount : -999999, 
      status: 1, 
      surface : 1, 
      message: packname, 
      orderTitle: 'Bang', 
      thumbnail: catalogo, 
      sellerJid: '0@s.whatsapp.net'
    }
  }
}

// CANALES
global.ch = {
  ch1: '120363335626706839@newsletter',
}

// LIBRERÍAS
global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment   

// RPG (no tocar)
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase();
    const emot = {
      level: '🌟 Nivel',
      coin: '💸 Coin',
      exp: '✨ Experiencia',
      bank: '🏦 Banco',
      diamond: '💎 Diamante',
      health: '❤️ Salud',
    };
    const results = Object.keys(emot).filter(v => string.includes(v));
    return results.length ? emot[results[0]] : '';
  }
};

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'settings.js'"))
  import(`${file}?update=${Date.now()}`)
})