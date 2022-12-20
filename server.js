//הפלת פונקציה מתוך ספריית אי אן וי שטוענת את ההגדרות מקובץ דוט אי אן וי
require('dotenv').config();

function SendEmail(u, p) {
    console.log("sent Email to" + u);
    //קרא לגוגל והתחבר באמצעו השם והסיסמה
}
SendEmail(process.env.USER_EMAIL, process.env.EMAIL_PASS);
const http = require('http');
const app = require('./app');
const port = 5050;
const srv = http.createServer(app);
srv.listen(port, () => {
    console.log('Server Up')
});