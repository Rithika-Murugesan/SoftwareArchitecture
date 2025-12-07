import java.util.Scanner;

// ---------------- SMALL, FOCUSED CLASSES → LOW WMC ----------------

// Handles only Credit Score Checking
class CreditScoreService {
    public boolean isEligible(int score) {
        return score >= 600;
    }
}

// Handles Document Validation Only
class DocumentValidator {
    public boolean validate(boolean id, boolean address, boolean incomeDoc) {
        return id && address && incomeDoc;
    }
}

// Handles Only EMI Calculation
class EMICalculator {
    public double calculate(double principal, double rate, int years) {
        double r = rate / (12 * 100); // Monthly interest rate
        int n = years * 12; // Number of months
        return (principal * r * Math.pow(1 + r, n)) /
                (Math.pow(1 + r, n) - 1);
    }
}

// Handles Only Income Eligibility Checking
class IncomeEvaluator {
    public boolean canAfford(double monthlyIncome, double emi) {
        return monthlyIncome > emi * 2; // Income must be 2× EMI
    }
}

// Combines all small classes → orchestrates the loan approval
class LoanApprovalService {

    // Composition: Using helper classes (Loose Coupling → Low WMC per class)
    private CreditScoreService credit = new CreditScoreService();
    private DocumentValidator docs = new DocumentValidator();
    private EMICalculator emiCalc = new EMICalculator();
    private IncomeEvaluator incomeEval = new IncomeEvaluator();

    // Final Approval Method
    public boolean approve(int score, boolean id, boolean address, boolean incomeDoc,
            double principal, double rate, int years, double monthlyIncome) {

        // Step 1: Credit Score Check
        if (!credit.isEligible(score))
            return false;

        // Step 2: Document Validation
        if (!docs.validate(id, address, incomeDoc))
            return false;

        // Step 3: EMI Calculation
        double emi = emiCalc.calculate(principal, rate, years);

        // Step 4: Check Income Eligibility
        return incomeEval.canAfford(monthlyIncome, emi);
    }
}

// ---------------------------- MAIN PROGRAM ----------------------------

public class Low_WMC_Loan_Approval {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        // Create LoanApprovalService object
        LoanApprovalService service = new LoanApprovalService();

        // ------------------- USER INPUT SECTION -------------------
        System.out.print("Enter Credit Score: ");
        int creditScore = sc.nextInt();

        System.out.print("ID Proof Available? (true/false): ");
        boolean id = sc.nextBoolean();

        System.out.print("Address Proof Available? (true/false): ");
        boolean address = sc.nextBoolean();

        System.out.print("Income Proof Available? (true/false): ");
        boolean incomeDoc = sc.nextBoolean();

        System.out.print("Enter Loan Amount (Principal): ");
        double principal = sc.nextDouble();

        System.out.print("Enter Interest Rate (%): ");
        double rate = sc.nextDouble();

        System.out.print("Enter Loan Tenure (Years): ");
        int years = sc.nextInt();

        System.out.print("Enter Monthly Income: ");
        double monthlyIncome = sc.nextDouble();

        // ------------------- PROCESS LOAN APPROVAL -------------------
        boolean result = service.approve(creditScore, id, address, incomeDoc,
                principal, rate, years, monthlyIncome);

        // ------------------- OUTPUT -------------------
        System.out.println("      LOAN RESULT         ");
        System.out.println("--------------------------");
        System.out.println("Loan Status: " + (result ? "APPROVED" : "REJECTED"));

        sc.close();
    }
}
