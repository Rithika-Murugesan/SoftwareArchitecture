// ======== HIGH LCOM (BAD DESIGN) ========
class Smart_Home {

    // Fields
    private int temperature;
    private boolean lights_on;
    private int security;

    // Method uses only temperature
    public void control_thermostat(int value) {
        temperature = value;
        System.out.println("Thermostat set to " + temperature + "°C");
    }

    // Method uses only lightsOn
    public void toggle_lights(boolean on) {
        lights_on = on;
        System.out.println("Lights turned " + (lights_on ? "ON" : "OFF"));
    }

    // Method uses only securityLevel
    public void update_security(int level) {
        security = level;
        System.out.println("Security system updated to level " + security);
    }
}

// ======== MAIN (RUN HIGH LCOM) ========
public class High_LCOM {
    public static void main(String[] args) {

        Smart_Home controller = new Smart_Home();
        controller.control_thermostat(24);
        controller.toggle_lights(true);
        controller.update_security(3);

        System.out.println("\nLCOM4 = 3 (Three independent method groups)");
    }
}
