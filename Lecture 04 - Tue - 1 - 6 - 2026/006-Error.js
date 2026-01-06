function criticalCode() {
    throw new Error("Something went wrong in criticalCode!")
}

function logError(theException) {
    console.log(theException);
}

console.log("Starting error handling Example --- ");
try {
    criticalCode();
} catch (ex){
    console.log('Caught an error:',ex.message);
    logError(ex);
    
}

console.log('\n--- Throwing in Try-Catch ---');
try {
    throw new Error("Manually throw error!");
} catch(ex) {
    console.log('Caught an Error:')
    logError(ex);
}

console.log('\n--- Finally-Catch ---');

try{
    criticalCode();
} catch(ex){
    console.log("Got an Error")
    logError(ex);

} finally{
    console.log('Code that always will run');
}

hello();

function hello() {
    console.log('\n--- Throwing Exception ---\n')
}