import { AuthService } from "./auth";
import { PaymentService } from "./payment";
import { ReportingService } from "./reporting";
import { EmailService } from "./email";
import { DatabaseService } from "./database";
import { AuditService } from "./audit";

console.log("PROGRAM STARTED\n");

const auth = new AuthService();
const payment = new PaymentService();
const report = new ReportingService();
const email = new EmailService();
const db = new DatabaseService();
const audit = new AuditService();

// --- AUTH ---
auth.login("admin", "secret");

// --- PAYMENT ---
payment.process(500, "1234567890123");

// --- REPORT ---
console.log("\n--- REPORT OUTPUT ---");
console.log(report.generateMonthlyReport());

// --- EMAIL ---
console.log("\n--- EMAIL NOTIFICATION ---");
email.send("username@example.com", "Hello", "Body text");

console.log("\nPROGRAM FINISHED");
