// DIT Level 0: Root Component
class BaseService {
    log(message: string) { console.log("[BaseService]", message); }
}

// DIT Level 1
class NetworkService extends BaseService {
    request(url: string) {
        this.log("Requesting: " + url);
        return { data: "response" };
    }
}

// DIT Level 2
class AuthService extends NetworkService {
    authenticate(valid_token: string) {
        this.log("Authenticating token...");
        return valid_token === "valid";
    }
}

// DIT Level 3
class UserService extends AuthService {
    fetchUser(id: number) {
        this.log("Fetching user...");
        return { id, name: "Rithika", role: "Admin" };
    }
}

// DIT Level 4 → HIGH DIT Component
class UserProfileManager extends UserService {
    loadProfile(id: number, valid_token: string) {
        if (!this.authenticate(valid_token)) {
            this.log("Auth failed!");
            return null;
        }

        const user = this.fetchUser(id);
        this.log("Loaded Profile → " + user.name);
        return user;
    }
}

// Usage
const manager = new UserProfileManager();
manager.loadProfile(101, "valid");
