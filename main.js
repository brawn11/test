// دالة ترحيب بسيطة
function welcome(name) {
  return `مرحبًا بك، ${name} في موقعنا!`;
}

// عند تحميل الصفحة، عرض رسالة في عنصر بالمعرف resultMain
window.onload = function() {
  const resultDiv = document.getElementById('resultMain');
  if(resultDiv) {
    resultDiv.textContent = welcome('علي');
  }
};
