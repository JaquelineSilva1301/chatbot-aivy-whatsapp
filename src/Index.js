const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

// Criando cliente
const client = new Client({
    authStrategy: new LocalAuth()
});

// Gerar QR Code
client.on('qr', qr => {
    console.log('Escaneie o QR Code abaixo:');
    qrcode.generate(qr, { small: true });
});

// Quando conectar
client.on('ready', () => {
    console.log('🤖 Chatbot Aivy está online!');
});

// Receber mensagens
client.on('message', async message => {
    const msg = message.body.toLowerCase();

    if (msg === 'oi' || msg === 'menu') {
        message.reply(
`🌸 Olá! Eu sou a Aivy, sua assistente virtual 💜

Digite uma opção:
1️⃣ Saúde Física
2️⃣ Educação
3️⃣ Igualdade de Gênero`
        );
    }
});

// Inicializar o bot
client.initialize();