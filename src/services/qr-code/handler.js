import chalk from "chalk";
import qr from "qrcode-terminal"

async function handler(err, choice) {
    if (err) {
        console.log("error on application");
        return;
    }

    const isSmall = choice.type == 2;   
    qr.generate(choice.link, {small: isSmall}, (qrcode)=>{
        console.log(chalk.green("QR CODE gerdo com sucesso: \n"));
        console.log(qrcode);
        
    })
}

export default handler