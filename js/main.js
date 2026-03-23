// Hiển thị thời gian deploy
const timeEl = document.getElementById('deploy-time');
const now = new Date();
timeEl.textContent = 'Trang được tải lúc: ' + now.toLocaleString('vi-VN');

console.log('CI/CD Pipeline Demo loaded successfully!');
console.log('GitLab Pages deployment working!');