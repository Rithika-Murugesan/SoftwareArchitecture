// ----- Concrete Repository -----
class PatientRepository {
    public String getPatientInfo(int patientId) {
        // Simulate DB fetch
        return "Patient Info for ID: " + patientId;
    }
}

// ----- Concrete Email Notification -----
class EmailNotificationService {
    public void sendEmail(String message) {
        System.out.println("[Email] " + message);
    }
}

// ----- Concrete SMS Notification -----
class SMSNotificationService {
    public void sendSMS(String message) {
        System.out.println("[SMS] " + message);
    }
}

// ----- POOR DESIGN: HIGH CBO -----
class PatientService {
    private PatientRepository repo = new PatientRepository(); // Hard dependency
    private EmailNotificationService emailService = new EmailNotificationService(); // Hard dependency
    private SMSNotificationService smsService = new SMSNotificationService(); // Hard dependency

    public void notifyPatient(int patientId) {
        String info = repo.getPatientInfo(patientId);
        emailService.sendEmail(info);
        smsService.sendSMS(info);
    }
}

// ----- Usage -----
public class High_CBO_HospitalApp {
    public static void main(String[] args) {
        PatientService service = new PatientService();
        service.notifyPatient(101);
    }
}
