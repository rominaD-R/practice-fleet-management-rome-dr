

// Tasks
// 1. Define the Vehicle Class:
//      ○ The constructor should include properties: type, make, model, year, and mileage.
//      ○ Use default values for mileage (e.g., 0).
// 2. Add Methods:
//      ○ drive(distance): Increases the vehicle’s mileage by the given distance (in kilometers or miles).
//      ○ getDetails(): Returns a formatted string describing the vehicle’s details.
// 3. Create and Use Vehicle Objects:
//      ○ Instantiate at least three vehicle objects with different properties (e.g., a car, a truck, and a motorcycle).
//      ○ Use the drive method to simulate trips and update mileage.
//      ○ Use the getDetails method to print each vehicle’s updated information.

class Vehicle {
    constructor(type, make, model, year, mileage=0) {
        this.type = type;
        this.make = make;
        this.model = model;
        this.year = year;
        this.mileage = mileage;
    }

    drive(distance) {
        this.mileage += distance;
    }

    getDetails() {
        console.log(`This vehicle is a ${this.type}, ${this.make} ${this.model} ${this.year}. It has ${this.mileage} miles.\n`);
    }
}

let hondaCivic = new Vehicle('car', 'Honda', 'Civic', 2000, 183000);
let toyotaCamry = new Vehicle('car', 'Toyota', 'Camry', 2018, 60000);
let mercedesRoadster = new Vehicle('car', 'Mercedes-Benz', 'AMG SL 43 Roadster', 2025);

hondaCivic.getDetails();

toyotaCamry.getDetails();
toyotaCamry.drive(34);
toyotaCamry.getDetails();

mercedesRoadster.drive(100);
mercedesRoadster.getDetails();
