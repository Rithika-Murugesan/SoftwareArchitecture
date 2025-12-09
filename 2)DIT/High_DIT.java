// DIT Level 0: Root Component
class BaseService {
    public void log(String message) {
        System.out.println("[BaseService] " + message);
    }
}

// DIT Level 1
class NetworkService extends BaseService {
    public String request(String url) {
        log("Requesting: " + url);
        return "response";
    }
}

// DIT Level 2
class AuthService extends NetworkService {
    public boolean authenticate(String token) {
        log("Authenticating token...");
        return token.equals("valid");
    }
}

// DIT Level 3
class UserService extends AuthService {
    public User fetchUser(int id) {
        log("Fetching user...");
        return new User(id, "Rithika", "Admin");
    }
}

// Helper User model
class User {
    int id;
    String name;
    String role;

    public User(int id, String name, String role) {
        this.id = id;
        this.name = name;
        this.role = role;
    }
}

// DIT Level 4 → High DIT Component
class UserProfileManager extends UserService {
    public User loadProfile(int id, String token) {
        if (!authenticate(token)) {
            log("Auth failed!");
            return null;
        }

        User user = fetchUser(id);
        log("Loaded Profile → " + user.name);
        return user;
    }
}

// Usage
public class High_DIT {
    public static void main(String[] args) {
        UserProfileManager manager = new UserProfileManager();
        manager.loadProfile(101, "valid");
    }
}
