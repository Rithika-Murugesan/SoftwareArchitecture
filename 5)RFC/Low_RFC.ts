// =================== External Systems (same) ===================
class DatabaseService {
    connect(db: string) { console.log(`DB Connected: ${db}`); }
    disconnect() { console.log("DB Disconnected"); }
}

class CacheService {
    clear(key: string) { console.log(`Cache cleared for: ${key}`); }
}

class LoggingService {
    log(msg: string) { console.log(`LOG: ${msg}`); }
}

class NotificationService {
    sendEmail(user: string) { console.log(`Email sent to: ${user}`); }
}

// =================== LOW RFC SMALL CLASSES ===================
// These are individual subsystem classes.
// Each class does one small responsibility.
// They are NOT the facade — they are the internal complexity.
class UserCreator {
    constructor(private db: DatabaseService, private log: LoggingService) { }

    create(username: string) {
        this.log.log("Creating user...");
        this.db.connect("users_db");
        console.log("User saved.");
        this.db.disconnect();
    }
}

class ProfileUpdater {
    constructor(private db: DatabaseService) { }

    update(username: string) {
        this.db.connect("users_db");
        console.log("Profile updated.");
        this.db.disconnect();
    }
}

class CacheManager {
    constructor(private cache: CacheService) { }

    clearUser(username: string) {
        this.cache.clear(`user_${username}`);
    }
}

class EmailNotifier {
    constructor(private notifier: NotificationService) { }

    send(email: string) {
        this.notifier.sendEmail(email);
    }
}

// =================== LOW RFC FACADE ===================
// This class hides all complexity.
// It coordinates UserCreator, ProfileUpdater, CacheManager, EmailNotifier.
// Client calls only THIS class — so this IS the Facade Pattern.
class User_Account_Manager {

    private creator = new UserCreator(new DatabaseService(), new LoggingService());
    private profile = new ProfileUpdater(new DatabaseService());
    private cache = new CacheManager(new CacheService());
    private notifier = new EmailNotifier(new NotificationService());

    // Only ONE public method (Low RFC)
    public register_user(username: string, email: string) {
        this.creator.create(username);
        this.cache.clearUser(username);
        this.notifier.send(email);
        console.log("User registration complete!");
    }

    // Optional second method only
    public update_profile(username: string) {
        this.profile.update(username);
        this.cache.clearUser(username);
    }
}

// =================== CLIENT CODE ===================
// Client interacts ONLY with the Facade class.
// Client does NOT touch subsystems — proof of facade pattern.
const user1 = new User_Account_Manager();
user1.register_user("Rithika", "rithika@example.com");
user1.update_profile("Rithika");
