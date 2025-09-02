const net = require('net');
const readline = require('readline');
const os = require('os');

const PORT = 5000;
const HOST = '10.91.236.143';

const client = new net,socket();

const rl = readline.createInterface({
    input: process.stdin,
    output: process stdout
})

function perguntar(){
    rl.question('digite sua mensagem (ou *sair* para encerrar):', (msg) =>{
        if(msg.toLowerCase()==='sair'){
            client.end();
            rl.close();
            return;
        }
    }
}
