function createLogEntry(message) {
    const now = new Date();
    const timestamp = now.toLocaleDateString('th-TH');

    const evenId = Math.random().toString(36).substring(2, 10).toUpperCase();
   const lowMessage = message.toLowerCase();

    return `[${timestamp}] [ID: ${evenId}] ${lowMessage}`;
};

const log = createLogEntry("User login successfully.");
console.log(log);