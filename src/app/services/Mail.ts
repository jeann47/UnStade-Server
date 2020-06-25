import transporter from '../../config/nodemailer';
import mailBodyBuilder from './MailBodyBuilder';
import 'dotenv/config';

interface Request {
    name: string;
    email: string;
    subject: string;
    message: string;
}

class Mail {
    public async send({
        name,
        email,
        subject,
        message,
    }: Request): Promise<boolean> {
        if (!(await transporter.verify())) {
            throw new Error();
        }

        const html = mailBodyBuilder({ name, email, subject, message });
        if (!html) throw new Error();

        const mail = {
            from: email,
            to: process.env.EMAIL,
            subject,
            html,
        };

        const sent = await transporter.sendMail(mail);

        if (!sent) {
            throw new Error();
        }

        const replyhtml = mailBodyBuilder({ subject: 'reply contact' });
        if (!replyhtml) throw new Error();

        const reply = {
            from: process.env.EMAIL,
            to: email,
            subject: '<UnStade.noreply> recebemos seu email!',
            html: replyhtml,
        };

        const replied = await transporter.sendMail(reply);

        return sent && replied;
    }
}

export default Mail;
