const username = "";
if (username) { // โค้ดส่วนนี้จะไม่ถูกดำเนินการ เพราะเป็น falsy
    console.log(`welcome, ${username}!`);
} else {
    console.log("Please provide a name."); //โค้ดส่วนนี้จะถูกดำเนินการ 
}
