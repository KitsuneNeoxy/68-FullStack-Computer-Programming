function promiseTimeout(ms) {
    return new Promise((resolve, rejct) => {
        setTimeout(resolve,ms);

    });
}

async function logRunniningOperation (){
    return 42;

}

async function run (){
    console.log("Start !!");

    await promiseTimeout(2000);

    const respond = await longRunningOperation();
    console.log(response);
    console.log('Stop!');
}

run();