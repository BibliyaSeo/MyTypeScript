"use strict";
let userInput;
let userName;
userInput = 5;
userInput = "Bibliya";
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
    // while(true) {}
}
generateError("An Error ocuurred!", 500);
//# sourceMappingURL=never.js.map