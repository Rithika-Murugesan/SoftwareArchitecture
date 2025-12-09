// ======== LOW LCOM (GOOD DESIGN) ========
class EnergyManager {

    private int energy_usage = 0; // Shared field

    public void Add_device(int units) {
        energy_usage += units;
        System.out.println("Added device usage: +" + units + " units");
    }

    public void reduce_usage(int units) {
        energy_usage -= units;
        System.out.println("Reduced usage: -" + units + " units");
    }

    public void display_usage() {
        System.out.println("Total Energy Usage: " + energy_usage + " units");
    }
}

// ======== MAIN (LOW LCOM) ========
public class Low_LCOM {
    public static void main(String[] args) {

        EnergyManager manager = new EnergyManager();
        manager.Add_device(50);
        manager.reduce_usage(10);
        manager.display_usage();

        System.out.println("\nLCOM4 = 1 (All methods share one field)");
    }

}
