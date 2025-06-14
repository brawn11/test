const express = require('express');
const path = require('path');
const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'brho.html'));
});

const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: { args: ['--no-sandbox'] }
});

client.on('qr', qr => {
  console.log('QR RECEIVED');
  qrcode.generate(qr, { small: true });
});

client.on('ready', () => console.log('✅ بوت واتساب جاهز!'));
client.on('auth_failure', msg => console.error('❌ فشل المصادقة:', msg));

client.on('message', async msg => {
  if (msg.fromMe) return;
  console.log(`رسالة من ${msg.from}: ${msg.body}`);
  await new Promise(r => setTimeout(r, 3000));
  msg.reply('كيف يمكنني مساعدتك؟ 😊');
});

client.initialize();

app.post('/send-message', async (req, res) => {
  const { number, message } = req.body;
  if (!number || !message) return res.status(400).json({ success: false, error: 'الرقم والرسالة مطلوبان' });

  const chatId = number.includes('@c.us') ? number : `${number}@c.us`;

  try {
    await client.sendMessage(chatId, message);
    res.json({ success: true, message: 'تم إرسال الرسالة بنجاح' });
  } catch (error) {
    console.error('خطأ في الإرسال:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
