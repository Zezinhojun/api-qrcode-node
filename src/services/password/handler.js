import permittedCharacters from "./utils/permittedCharacters.js";

async function handler() {
    let characters = await permittedCharacters();
    let password = "";

    const passwordLength = process.env.PASSWORD_LENGTH

    for (let i = 0; i < passwordLength; i++) {
        const index = Math.floor(Math.random() * characters.length)
        password += characters[index];
    }
    
    return password
}

export default handler