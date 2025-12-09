/*// No inheritance — modular components

class Logger {
    public void log(String message) {
        System.out.println("[Logger] " + message);
    }
}

class NetworkClient {
    public String request(String url) {
        System.out.println("[Network] Requesting: " + url);
        return "response";
    }
}

class AuthModule {
    public boolean authenticate(String token) {
        System.out.println("[Auth] Authenticating...");
        return token.equals("valid");
    }
}

class Users {
    int id;
    String name;
    String role;

    public Users(int id, String name, String role) {
        this.id = id;
        this.name = name;
        this.role = role;
    }
}

class UserRepository {
    public Users fetch_user(int id) {
        System.out.println("[UserRepo] Fetching user...");
        return new Users(id, "Rithika", "Admin");
    }
}

// LOW DIT Component (DIT = 0)
class UserProfileManagerLowDIT {
    private Logger logger;
    private NetworkClient network;
    private AuthModule auth;
    private UserRepository repo;

    public UserProfileManagerLowDIT() {
        this.logger = new Logger();
        this.network = new NetworkClient();
        this.auth = new AuthModule();
        this.repo = new UserRepository();
    }

    public Users loadProfile(int id, String token) {
        logger.log("Loading profile...");

        if (!auth.authenticate(token)) {
            logger.log("Auth failed!");
            return null;
        }

        Users user = repo.fetch_user(id);
        logger.log("Loaded Profile → " + user.name);

        return user;
    }
}

// Usage
public class Low_DIT {
    public static void main(String[] args) {
        UserProfileManagerLowDIT manager = new UserProfileManagerLowDIT();
        manager.loadProfile(101, "valid");
    }
}*/
