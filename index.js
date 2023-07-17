function Scooter(year,color,model){
    this.year = year,
    this.color= color,
    this.model= model
};

function Driver(name,age,experience){
    this.name = name,
    this.age = age,
    this.experience = experience
}

function PickupLocation(address,city){
    this.address = address,
    this.city = city
}

const scooter = new Scooter(2015,'red','swoosh');
const driver = new Driver ("Allison","16 years","2 years");
const location = new PickupLocation("123 Broadway","New York City");
