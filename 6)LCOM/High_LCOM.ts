// ====================== HIGH LCOM (BAD DESIGN) ======================

// print_name() uses only `name`
// connect() uses only `dbConfig` 
// No shared data → no cohesion → HIGH LCOM

class UserManager {
    name: string = "Murugesan";
    db_config: string = "MainDatabase";

    // Method Group A - User-related
    print_name() {
        console.log("User Name:", this.name);
    }

    // Method Group B - Database-related (completely different)
    connect() {
        console.log("Connecting to:", this.db_config);
    }
}



const manager = new UserManager();

manager.print_name();
manager.connect();


