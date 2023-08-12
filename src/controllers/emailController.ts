import { Request, Response } from 'express';
import nodemailer from 'nodemailer';

export const contato = async (req: Request, res: Response) => {
    
    //Passo 1 -> Confirgurar o transporter

    let transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "318943ae462433",
          pass: "2f14925feddf4e"
        }
    });

    //Passo 2 -> Configurar a mensagem

    let message = {
        from:       req.body.from,
        to:         'teste@gmail.com',
        subject:    req.body.subject,
        html:       req.body.email,
        text:       req.body.email
    }
    //Passo 3 -> Enviar a Mensagem

    let email = await transport.sendMail(message);

    res.json({email});
    
}