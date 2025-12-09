// ========= Subsystem Classes =========
class AuthService {
    void checkUser() {
        System.out.println("AuthService: User authenticated");
    }
}

class Database {
    void connect() {
        System.out.println("Database: Connected");
    }

    void saveOrder() {
        System.out.println("Database: Order saved");
    }
}

class EmailService {
    void sendMail() {
        System.out.println("EmailService: Email sent");
    }
}

class Logger {
    void logInfo() {
        System.out.println("Logger: Log entry created");
    }
}

// ========= POOR: HIGH RFC CLASS =========
class OrderProcessor {

    AuthService auth = new AuthService();
    Database db = new Database();
    EmailService email = new EmailService();
    Logger logger = new Logger();

    public void process() {
        auth.checkUser(); // external method 1
        db.connect(); // external method 2
        db.saveOrder(); // external method 3
        email.sendMail(); // external method 4
        logger.logInfo(); // external method 5
    }
}

// ========= MAIN EXECUTION =========
public class High_RFC {
    public static void main(String[] args) {

        System.out.println("----- Executing High RFC Class -----");

        OrderProcessor processor = new OrderProcessor();
        processor.process();

        System.out.println("\nRFC = 6 (1 internal + 5 external methods)");
    }
}
