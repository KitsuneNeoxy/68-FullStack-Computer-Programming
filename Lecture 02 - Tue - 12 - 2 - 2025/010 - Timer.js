const startTme = Date.now();

function someHeavyTask() {
    let result = 0;
}
const endTime = Date.now();
const duration = endTime - startTme;


console.log(`ฟังก์ชันใช้เวลาในการำงาน: ${duration} วินาที`);
