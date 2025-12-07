import java.util.Scanner;

public class High_WMC_Loan_Approval {

    public boolean check_credit_score(int score) {
        return score >= 600;
    }

    public boolean validate_documents(boolean id_proof, boolean address_proof, boolean income_proof) {
        return id_proof && address_proof && income_proof;
    }

    public double calculate_EMI(double principal, double rate, int years) {
        double r = rate / (12 * 100);
        int n = years * 12;
        return (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    }

    public boolean Evaluate_income(double income, double emi) {
        return income > emi * 2;
    }

    public void log_decision(String message) {
        System.out.println("[LOG] " + message);
    }

    public boolean approve_loan(int score, boolean id, boolean address, boolean income_doc,
            double principal, double rate, int years, double monthly_income) {

        boolean credit = check_credit_score(score);
        boolean docs = validate_documents(id, address, income_doc);
        double emi = calculate_EMI(principal, rate, years);
        boolean income = Evaluate_income(monthly_income, emi);

        if (credit && docs && income) {
            log_decision("Loan Approved");
            return true;
        } else {
            log_decision("Loan Rejected");
            return false;
        }
    }

    // ---------------- MAIN METHOD WITH USER INPUT ----------------
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        High_WMC_Loan_Approval loan = new High_WMC_Loan_Approval();

        System.out.print("Enter Credit Score: ");
        int creditScore = sc.nextInt();

        System.out.print("ID Proof Available?: ");
        boolean id = sc.nextBoolean();

        System.out.print("Address Proof Available?: ");
        boolean address = sc.nextBoolean();

        System.out.print("Income Proof Available?: ");
        boolean incomeDoc = sc.nextBoolean();

        System.out.print("Enter Loan Amount: ");
        double principal = sc.nextDouble();

        System.out.print("Enter Interest Rate: ");
        double rate = sc.nextDouble();

        System.out.print("Enter Loan Tenure in Years: ");
        int years = sc.nextInt();

        System.out.print("Enter Monthly Income: ");
        double monthlyIncome = sc.nextDouble();

        boolean result = loan.approve_loan(creditScore, id, address, incomeDoc,
                principal, rate, years, monthlyIncome);

        System.out.println("\nLoan Approval Result: " + (result ? "APPROVED" : "REJECTED"));

        sc.close();
    }
}