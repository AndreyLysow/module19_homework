
//В этой функции создается класс Appliance, который принимает параметры: 
//имя устройства, категория, потребляемый ток, флаг подключения в розетку
//и флаг включения устройства. Методы класса позволяют подключать и включать 
//устройства, а также получать информацию о потреблении электроэнергии.


function Appliance(name, category, current, isPluggedIn=false, isTurnedOn=false) {
    this.name = name;
    this.category = category;
    this.current = current;
    this.voltage = 220;
    this.isPluggedIn = isPluggedIn;
    this.isTurnedOn = isTurnedOn;
 }
 
 Appliance.prototype.plugIn = function() {
     this.isPluggedIn = true;
 }
 
 Appliance.prototype.turnOn = function() {
     this.isTurnedOn = true;
 }
 
 Appliance.prototype.getPowerUsage = function() {
     let actualVoltage = this.isPluggedIn && this.isTurnedOn ? this.voltage : 0;
     console.log(`${this.name} consumes ${actualVoltage * this.current} W`);
 }
 
 const lamp = new Appliance('Desk Lamp', 'Energy-saving', 1.6, true);
 const computer = new Appliance('Desktop workstation', 'Computer', 15, true);
 
 // Action
 lamp.turnOn();
 console.log(lamp);
 console.log(computer);
 lamp.getPowerUsage();
 computer.getPowerUsage(); // ожидаемый результат - 0, так как компьютер выключен.