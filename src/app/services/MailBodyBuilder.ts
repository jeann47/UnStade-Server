import reply from '../templates/reply';
import contact from '../templates/contact';

interface Request {
    name?: string;
    email?: string;
    subject: string;
    message?: string;
}
const mailBodyBuilder = ({
    name,
    email,
    subject,
    message,
}: Request): string | null => {
    if (subject === 'Landind page contact') {
        if (!name || !email || !message) return null;
        return contact({ name, email, message });
    }

    if (subject === 'reply contact') {
        return reply;
    }
    return null;
};

export default mailBodyBuilder;
