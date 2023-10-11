const TOKEN = 'RI1exG!SitMnaShFxWy3'
const URL = 'https://api.fonnte.com/send'
const RECEIVER = '08984897050'

function constructMessage(name, province, regency, district){
    return `New User Registered\nName : ${name}\nProvince : ${province}\nRegency : ${regency}\nDistrict : ${district}`
}

async function sendMessage(name, province, regency, district){
    try {
        await fetch( URL, {
            method : 'POST',
            headers : {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: TOKEN
            },
            body : JSON.stringify({
                target: RECEIVER,
                message: constructMessage(name, province, regency, district)
            })
        })
    } catch (error) {
        console.error(error)
    }
}

export {sendMessage};