const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// تعيين مجلد public كمصدر للملفات الثابتة
app.use(express.static(path.join(__dirname, 'public')));

// أي طلب جاي على السيرفر يرسل ملف index.html تلقائياً (لصفحة رئيسية)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
