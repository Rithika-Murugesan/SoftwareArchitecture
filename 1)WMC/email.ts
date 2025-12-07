export class EmailService {
    send(to: string, subject: string, body: string): void {
        console.log(`Sending email to ${to} | Subject: ${subject}`);
    }
}
