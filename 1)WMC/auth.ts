export class AuthService {
    login(username: string, password: string): boolean {
        console.log("Executing login()...");
        return username === "admin" && password === "secret";
    }

    logout(): void {
        console.log("User logged out.");
    }
}
