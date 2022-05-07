import nodemailer from 'nodemailer';
import { MailService, SendMailData } from "../mail-service";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "f84297e57c8148",
      pass: "8d10a2abed4d2b"
    }
});

export class NodemailerMailService implements MailService {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Victor Lellis <victorlwernay@gmail.com>',
            subject,
            html: body
        });
    }
}