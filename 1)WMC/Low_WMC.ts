// GOOD DESIGN: LOW WMC (Many small classes)

// -------- AUTH SERVICE --------
class AuthService {
    login(username: string, password: string): boolean {
        return username === "admin" && password === "secret";
    }

    logout(): void {
        console.log("User logged out.");
    }
}

// -------- PAYMENT SERVICE --------
class PaymentService {
    processPayment(amount: number, card: string): boolean {
        if (amount > 0 && card.length > 10) {
            console.log(`Processing payment of $${amount}`);
            return true;
        }
        console.log("Payment failed.");
        return false;
    }
}

// -------- INVOICE SERVICE --------
class InvoiceService {
    generateInvoice(userId: string, amount: number): string {
        return `Invoice ID: INV-${Date.now()} | User: ${userId} | Amount: $${amount}`;
    }
}

// -------- REPORT SERVICE --------
class ReportService {
    generateMonthlyReport(): string {
        let report = "Monthly Report\n";
        for (let i = 1; i <= 5; i++) {
            report += `Data row ${i}\n`;
        }
        return report;
    }
}

// -------- EMAIL SERVICE --------
class EmailService {
    sendEmail(to: string, subject: string, body: string): void {
        console.log(`Sending email to ${to} | Subject: ${subject}`);
    }
}

// -------- DATABASE SERVICE --------
class DatabaseService {
    connect(): void {
        console.log("Connected to Postgres DB...");
    }

    save(data: any): void {
        console.log("Saving data:", data);
    }

    fetch(query: string): any[] {
        console.log("Fetching data with query:", query);
        return [];
    }
}

// -------- AUDIT SERVICE --------
class AuditService {
    log(message: string): void {
        console.log("AUDIT:", message);
    }
}

// -------- DISCOUNT SERVICE --------
class DiscountService {
    calculate(amount: number): number {
        return amount > 100 ? amount * 0.1 : 0;
    }
}

// -------- BACKUP SERVICE --------
class BackupService {
    backup(): void {
        console.log("Backing up database...");
    }
}

// -------- FACADE (Optional) --------
// A simple controller to call small classes.
class ApplicationController {
    private auth = new AuthService();
    private pay = new PaymentService();
    private invoice = new InvoiceService();
    private report = new ReportService();
    private email = new EmailService();
    private db = new DatabaseService();
    private audit = new AuditService();

    startApp(): void {
        console.log("Application Started\n");

        this.db.connect();

        // Login
        if (this.auth.login("admin", "secret")) {
            console.log("Login Successful");
        }

        // Payment
        this.pay.processPayment(500, "9999888877776666");

        // Report
        console.log("\n--- REPORT ---");
        console.log(this.report.generateMonthlyReport());

        // Email
        console.log("\n--- EMAIL ---");
        this.email.sendEmail("test@example.com", "Hello", "Body text");

        // Audit
        this.audit.log("App executed successfully.");

        console.log("\nApplication Finished");
    }
}


const controller = new ApplicationController();
controller.startApp();
