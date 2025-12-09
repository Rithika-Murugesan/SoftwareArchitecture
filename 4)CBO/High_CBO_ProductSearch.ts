class APISource {
    fetchProducts(): { id: number, name: string, category: string }[] {
        console.log("Fetching products directly from the external REST API...");
        // Simulates an API call
        return [
            { id: 1, name: "Laptop", category: "Electronics" },
            { id: 2, name: "T-Shirt", category: "Apparel" },
            { id: 3, name: "Monitor", category: "Electronics" },
        ];
    }
}

// The Service Class with HIGH CBO
class ProductService {
    private source: APISource; // Direct dependency

    constructor() {
        // TIGHT COUPLING - ProductService is explicitly tied to the 'APISource' implementation.
        this.source = new APISource();
    }

    searchProducts(query: string) {
        console.log(`Searching for query: "${query}"`);
        const allProducts = this.source.fetchProducts();

        // data retrieval specifics
        const results = allProducts.filter(product =>
            product.name.toLowerCase().includes(query.toLowerCase()) ||
            product.category.toLowerCase().includes(query.toLowerCase())
        );

        return results;
    }
}


const servicePoor = new ProductService();
const foundProductsPoor = servicePoor.searchProducts("electronics");
console.log("Found:", foundProductsPoor)