function NotOrGay (){
    return new Promise((resolve,reject) => {
        const val = Math.round(Math.random() * 1);

        val ? resolve ('lucky!!') : reject("Nope 🖖");
    });
}

async function msg() {
    try{
        const msg = await NotOrGay();
        console.log(msg);

    } catch(err){
        console.log(err);
    }
}


msg();
msg();
msg();
msg();
msg();
msg();