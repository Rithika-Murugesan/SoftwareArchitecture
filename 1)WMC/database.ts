export class DatabaseService {
    connect(): void {
        console.log("Connecting to Postgres DB...");
    }

    save(data: any): void {
        console.log("Saving data:", data);
    }

    fetch(query: string): any[] {
        console.log("Fetching data:", query);
        return [];
    }

    backup(): void {
        console.log("Backing up database...");
    }
}
