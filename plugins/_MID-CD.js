import { es, en } from '../lib/multi-language/_default.js' 

export async function before(m,{ conn }) {
let idioma  = global.db.data.users[m.sender].midLanguage
let MID_CD
  
if (idioma == "es") {
MID_CD = es
} else if (idioma == "en") {
MID_CD = en
} else {
MID_CD = mid || es
}
global.mid = MID_CD	

}

