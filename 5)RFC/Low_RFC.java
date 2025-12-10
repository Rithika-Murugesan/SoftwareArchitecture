/*
 * // ========= Subsystem Classes (Hidden Behind Facade) =========
 * class AuthService {
 * void checkUser() {
 * System.out.println("AuthService: User authenticated");
 * }
 * }
 * 
 * class Database {
 * void connect() {
 * System.out.println("Database: Connected");
 * }
 * 
 * void saveOrder() {
 * System.out.println("Database: Order saved");
 * }
 * }
 * 
 * class EmailService {
 * void sendMail() {
 * System.out.println("EmailService: Email sent");
 * }
 * }
 * 
 * class Logger {
 * void logInfo() {
 * System.out.println("Logger: Log entry created");
 * }
 * }
 * 
 * // ========= FACADE (Combines all subsystem calls) =========
 * class OrderFacade {
 * 
 * private AuthService auth = new AuthService();
 * private Database db = new Database();
 * private EmailService email = new EmailService();
 * private Logger logger = new Logger();
 * 
 * public void handleOrder() {
 * auth.checkUser();
 * db.connect();
 * db.saveOrder();
 * email.sendMail();
 * logger.logInfo();
 * }
 * }
 * 
 * // ========= GOOD: LOW RFC CLASS =========
 * class CleanProcessor {
 * 
 * private OrderFacade facade = new OrderFacade();
 * 
 * public void process() {
 * facade.handleOrder(); // Only ONE external call (low RFC)
 * }
 * }
 * 
 * // ========= MAIN EXECUTION =========
 * public class Low_RFC {
 * public static void main(String[] args) {
 * 
 * System.out.println("----- Executing Low RFC Class -----");
 * 
 * CleanProcessor processor = new CleanProcessor();
 * processor.process();
 * 
 * System.out.println("\nRFC = 2 (1 internal + 1 external method)");
 * }
 * }
 */
