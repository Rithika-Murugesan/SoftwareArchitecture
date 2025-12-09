// =================== External Systems ===================
class Database_Service {
    connect(db: string) { console.log(`DB Connected: ${db}`); }
    disconnect() { console.log("DB Disconnected"); }
}

class Cache_Service {
    clear(key: string) { console.log(`Cache cleared for: ${key}`); }
}

class Logging_Service {
    log(msg: string) { console.log(`LOG: ${msg}`); }
}

class Notification_Service {
    sendEmail(user: string) { console.log(`Email sent to: ${user}`); }
}

// =================== HIGH RFC CLASS ===================
class UserAccountManager {

    private db = new Database_Service();
    private cache = new Cache_Service();
    private logger = new Logging_Service();
    private notifier = new Notification_Service();

    // Method 1 → Calls 5 external services
    public create_user(username: string, email: string) {
        this.logger.log(`Attempting to create user: ${username}`);
        this.db.connect("users_db");
        console.log("Saving user to DB...");
        this.db.disconnect();
        this.cache.clear("user_list_cache");
        this.notifier.sendEmail(email);
        this.logger.log(`User ${username} created successfully`);
    }

    // Method 2 → Calls 2 external services
    public update_user_profile(username: string, profileData: any) {
        this.db.connect("users_db");
        console.log("Updating user profile...");
        this.cache.clear(`user_${username}`);
        this.db.disconnect();
    }

    // Method 3 → Calls 2 external services
    public delete_user(username: string) {
        this.logger.log(`Deleting user: ${username}`);
        this.db.connect("users_db");
        console.log("Deleting user from DB...");
        this.cache.clear(`user_${username}`);
        this.db.disconnect();
        this.logger.log(`User ${username} deleted`);
    }
}

// =================== HIGH RFC ===================
console.log("=== HIGH RFC OUTPUT ===");
const user = new UserAccountManager();
user.create_user("Rithika", "rithika@example.com");
user.update_user_profile("Rithika", { city: "Salem" });
user.delete_user("Rithika");
