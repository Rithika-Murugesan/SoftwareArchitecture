// File: HospitalAppGood.java
public class Low_CBO_HospitalAppGood {

    // ----- Interfaces -----
    interface IPatientRepository {
        String getPatientInfo(int patientId);
    }

    interface INotificationService {
        void send(String message);
    }

    // ----- Concrete Implementations -----
    static class PatientRepository implements IPatientRepository {
        public String getPatientInfo(int patientId) {
            return "Patient Info for ID: " + patientId;
        }
    }

    static class EmailNotificationService implements INotificationService {
        public void send(String message) {
            System.out.println("[Email] " + message);
        }
    }

    static class SMSNotificationService implements INotificationService {
        public void send(String message) {
            System.out.println("[SMS] " + message);
        }
    }

    // ----- Low CBO Service -----
    static class PatientService {
        private IPatientRepository repo;
        private INotificationService emailService;
        private INotificationService smsService;

        // Constructor Dependency Injection
        public PatientService(IPatientRepository repo,
                INotificationService emailService,
                INotificationService smsService) {
            this.repo = repo;
            this.emailService = emailService;
            this.smsService = smsService;
        }

        public void notifyPatient(int patientId) {
            String info = repo.getPatientInfo(patientId);
            emailService.send(info);
            smsService.send(info);
        }
    }

    // ----- Main Method -----
    public static void main(String[] args) {
        IPatientRepository repo = new PatientRepository();
        INotificationService email = new EmailNotificationService();
        INotificationService sms = new SMSNotificationService();

        PatientService service = new PatientService(repo, email, sms);
        service.notifyPatient(101);
    }
}
