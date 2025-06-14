#!/bin/bash

#   سكربت يقوم برفع الملفات في قيت هاب ####
# chmod +x upload.sh   اول امر 
#./upload.sh   يتحول لبرنج ثم تشغيل 

# ./upload.sh add      امر تطبيق التعديلات كلها   
# ./upload.sh del      امر حذف الملفات كلها  
# git push -f origin main     امر اذا حصلت مشكله في الرفع       




# بيانات المستودع
GITHUB_REPO_URL="https://github.com/brawn11/test.git"
BRANCH="main"

# تأكد من تهيئة git
if [ ! -d ".git" ]; then
  git init
  git branch -M "$BRANCH"
  git remote add origin "$GITHUB_REPO_URL"
fi

# حذف الملفات من GitHub فقط
if [[ "$1" == "del" ]]; then
  echo "🚨 حذف جميع الملفات من المستودع فقط (GitHub)..."
  git rm -r --cached .
  git commit -m "🗑️ حذف جميع الملفات من المستودع فقط"
  git push origin "$BRANCH"
  echo "🗑"
  exit 0
fi

# رفع الملفات (تعديلات / إضافات / حذف) إلى GitHub
if [[ "$1" == "add" ]]; then
  echo "📤 رفع الملفات وتحديث المستودع..."
  git add -A
  git commit -m "📤 تحديث شامل للملفات"
  git push origin "$BRANCH"
  echo "✅"
  exit 0
fi

# في حال لم يتم تمرير وسيط
echo "❌ يرجى استخدام:"
echo "  ./upload.sh add    لرفع الملفات"
echo "  ./upload.sh del    لحذف الملفات من GitHub فقط"
exit 1
