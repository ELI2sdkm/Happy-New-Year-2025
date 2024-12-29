// Firebase 配置
const firebaseConfig = {
    apiKey: "你的API密钥",
    authDomain: "你的项目域名",
    databaseURL: "https://你的数据库链接.firebaseio.com",
    projectId: "你的项目ID",
    storageBucket: "你的存储桶",
    messagingSenderId: "你的消息发送ID",
    appId: "你的APP ID"
};
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.database(app);

// 提交表单并存储到 Firebase
const form = document.getElementById('feedback-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const feedback = {
        impression: form.impression.value,
        expectation: form.expectation.value,
        message: form.message.value
    };

    firebase.database().ref('feedback').push(feedback);
    alert('感谢你的提交！');
    form.reset();
});
