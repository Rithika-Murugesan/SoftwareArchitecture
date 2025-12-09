// The abstract service to fetch products.
interface IProduct_Source {
    fetch_products(): { id: number, name: string, category: string }[];
}

//  Concrete Implementation (REST API Source)
class RestApi_Source implements IProduct_Source {
    fetch_products(): { id: number, name: string, category: string }[] {
        console.log("Fetching products from REST API...");
        return [
            { id: 1, name: "Laptop", category: "Electronics" },
            { id: 2, name: "T-Shirt", category: "Apparel" },
            { id: 3, name: "Monitor", category: "Electronics" },
        ];
    }
}

// Concrete Implementation (Mock/Test Source)
class Mock_Source implements IProduct_Source {
    fetch_products(): { id: number, name: string, category: string }[] {
        console.log("Fetching products from MOCK data (for testing)...");

        return [{ id: 99, name: "TestItem", category: "Test" }];
    }
}

//Decoupled Product Service (LOW CBO)
class Product_Service {
    private source: IProduct_Source; // Depends only on the abstraction

    // DEPENDENCY INJECTION
    constructor(productSource: IProduct_Source) {
        this.source = productSource;
    }

    search_products(query: string) {
        console.log(`Searching for query: "${query}"`);
        // The service doesn't care which source it is using, just that it works
        const allProducts = this.source.fetch_products();

        const results = allProducts.filter(product =>
            product.name.toLowerCase().includes(query.toLowerCase()) ||
            product.category.toLowerCase().includes(query.toLowerCase())
        );

        return results;
    }
}



//RestApi Source
const product = new RestApi_Source();
const serviceProd = new Product_Service(product);
const product_results = serviceProd.search_products("Apparel");
console.log("Prod Results:", product_results);

console.log("\n--- Switching Implementations for Testing ---\n");

// Mock source
const mock = new Mock_Source();
const serviceTest = new Product_Service(mock);
const test_results = serviceTest.search_products("Test");
console.log("Test Results:", test_results);


// BENEFIT: ProductServiceGood has low CBO. We can easily swap data sources
// without modifying the core service logic, making the system flexible and testable.