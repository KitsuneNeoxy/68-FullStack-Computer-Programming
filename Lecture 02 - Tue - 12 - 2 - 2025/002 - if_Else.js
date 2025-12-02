const status = 500;

if (status === 200) {
    console.log('OK!');
} else if (status === 400) {
    console.log('Error!');
} else {
    console.log('Unknown');
}

switch (status) {
    case 200:
        console.log('OK!');
        break;
    case 400:
        console.log('Error!');
        break;
    default:
        console.log('Unknown');
}

const statusMessage = status === 200 ? 'OK!' : 'Bad Request';
console.log(statusMessage);
