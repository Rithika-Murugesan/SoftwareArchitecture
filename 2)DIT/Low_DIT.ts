class Logger {
    log(message: string): void {
        console.log("[Logger]", message);
    }
}

class NetworkClient {
    request(url: string): { data: string } {
        console.log("[Network]", "Requesting:", url);
        return { data: "response" };
    }
}

class AuthModule {
    authenticate(token: string): boolean {
        console.log("[Auth]", "Authenticating...");
        return token === "valid";
    }
}

class UserRepository {
    fetchUser(id: number): { id: number; name: string; role: string } {
        console.log("[UserRepo]", "Fetching user...");
        return { id, name: "Rithika", role: "Admin" };
    }
}

class UserProfileManager {
    private logger: Logger;
    private network: NetworkClient;
    private auth: AuthModule;
    private repo: UserRepository;

    constructor() {
        this.logger = new Logger();
        this.network = new NetworkClient();
        this.auth = new AuthModule();
        this.repo = new UserRepository();
    }

    loadProfile(id: number, token: string): object | null {
        this.logger.log("Loading profile...");

        if (!this.auth.authenticate(token)) {
            this.logger.log("Auth failed!");
            return null;
        }

        const user = this.repo.fetchUser(id);
        this.logger.log("Loaded Profile → " + user.name);
        return user;
    }
}

// Usage
const manager = new UserProfileManager();
manager.loadProfile(101, "valid");
