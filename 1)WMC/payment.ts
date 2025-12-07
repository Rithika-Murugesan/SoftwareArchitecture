export class PaymentService {
    process(amount: number, card: string): boolean {
        console.log("Executing process_payment()...");
        return amount > 0 && card.length > 10;
    }

    calculateDiscount(amount: number): number {
        return amount > 100 ? amount * 0.1 : 0;
    }
}
