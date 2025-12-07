export class ReportingService {
    generateInvoice(userId: string, amount: number): string {
        return `Invoice ID: 12345 for User ${userId}, Amount $${amount}`;
    }

    generateMonthlyReport(): string {
        return "Monthly Report:\nRow1\nRow2\nRow3\nRow4\nRow5";
    }

    exportReport(format: string): string {
        return `Report exported as ${format}`;
    }
}
