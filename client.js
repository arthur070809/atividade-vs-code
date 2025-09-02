const net = require('net')
const readline = require('readline')
const os = require('os')

const PORT = 5000
const HOST = '10.91.236.143';

const client = new net.Socket()

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


function perguntar() {
rl.question("digite sua mensagem (ou 'sair' para encerrar):"), (msg) => {
    if (msg.toLowerCase()==="sair"){
        client.end()
        rl.close()
        return;
    }
    client.write(`${os.userInfo().username}: ${msg}`)
    perguntar()

}


}
client.connect(PORT, HOST, () => {
    console.log(`Conectado ao servidor do TCP!`)
    perguntar()
})

client.on("data", (data) => {
    console.log(`resposta di servudir: ${data.toString()}`)
})

client.on("close", () => {
    console.log("conexão encerrada pelo servidor.")
})






