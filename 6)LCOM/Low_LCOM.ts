// Low LCOM Example — GOOD Cohesion
// Class 1: Handles only user data
class Users {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    printname() {
        console.log("User Name:", this.name);
    }
}
// Class 2: Handles only database connection
class DbConnector {
    private dbConfig: string;

    constructor(dbConfig: string) {
        this.dbConfig = dbConfig;
    }

    connect() {
        console.log("Connecting to DB with config:", this.dbConfig);
    }
}

// Class 3: Handles only email-related functionality
class EmailService {
    private emailHost: string;

    constructor(emailHost: string) {
        this.emailHost = emailHost;
    }

    sendMail() {
        console.log("Sending email using host:", this.emailHost);
    }
}

// Usage
const users = new Users("Rithika");
users.printname();

const db = new DbConnector("localhost:3306");
db.connect();

const email = new EmailService("smtp.gmail.com");
email.sendMail();
