const  fullName = " Anirach Mingkhan";
const cleanedName = fullName.trim();
const nameParts = cleanedName.split(" ");
const finalParts = nameParts.filter(Boolean)
const firstName = finalParts[0];

console.log(`สวัดดี, ${firstName}!`);