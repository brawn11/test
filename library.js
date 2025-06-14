const express = require('express');
const app = express();

// خلي المنفذ من متغير البيئة أو 3000 افتراضياً
const PORT = process.env.PORT || 3000;

// مثال مسار بسيط
app.get('/', (req, res) => {
  res.send('مرحباً بك في سيرفري على Render!');
});

// شغل السيرفر
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
