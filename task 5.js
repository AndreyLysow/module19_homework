//Были созданы два класса: HouseholdAppliance и ElectricalAppliance. 
//ElectricalAppliance наследует от HouseholdAppliance. HouseholdAppliance 
//является базовым классом и содержит свойство applianceType.

//Класс ElectricalAppliance содержит следующие свойства: name, 
//applianceClass, type, voltage, electricCurrentIntensity, isPluggedIn
// и isTurnedOn. Кроме того, класс содержит методы plugIntoSocket(), 
//turnOn() и calculatePowerIntake(), которые позволяют управлять устройством 
//и определять потребляемую мощность.

//Для создания экземпляров класса были использованы конструкторы, 
//которые принимают аргументы для свойств name, type, electricCurrentIntensity, 
//isPluggedIn и isTurnedOn.

//Также были созданы два экземпляра класса: deskLamp и desktopPC,
// и были вызваны методы pollDeviceInfo() для каждого из них, 
//чтобы отобразить информацию о состоянии устройств.




class Appliance {
    constructor() {
        this.type = 'прибором';
    }
}

class ElectricDevice extends Appliance {
    constructor(name, description, current, isPluggedIn, isTurnedOn) {
        super();
        this.name = name;
        this.deviceType = 'электрическим ' + this.type;
        this.description = description;
        this.voltage = 220;
        this.current = current;
        this.isPluggedIn = isPluggedIn ? isPluggedIn : false;
        this.isTurnedOn = isTurnedOn ? isTurnedOn : false;
    }

    plugIn() {
        this.isPluggedIn = true;
    }

    turnOn() {
        this.isTurnedOn = true;
    }

    calculatePowerUsage() {
        let actualVoltage = this.isPluggedIn && this.isTurnedOn ? this.voltage : 0;
        return actualVoltage * this.current + ' Ватт';
    }

    getInfo() {
        return `${this.name} является ${this.deviceType} ${this.description}. В настоящее время ${(!this.isPluggedIn ? ' not ' : ' ')} подключен и ${(this.isTurnedOn ? 'ВКЛЮЧЕН' : 'ВЫКЛЮЧЕН')}. На данный момент потребляет ${this.calculatePowerUsage()}.`;
    }
}

const lamp = new ElectricDevice('Настольная лампа', 'с энергосберегающей лампочкой', 1.6, true);
const computer = new ElectricDevice('Настольный компьютер', 'со множеством проводов, USB-портов и другой техникой', 15, true);

console.log(lamp.getInfo());
lamp.turnOn();
console.log(lamp.getInfo());
console.log(computer.getInfo());