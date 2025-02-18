//1. Interfaces de los productos abstractos
interface Cpu {
    setSeries(serie: string): void;
}

interface Memory {
    setCapacityInGB(capacity: number): void;
}

interface Display {
    setResolution(): void;
}

//2. Implementaciones concretas de los productos

class PhoneCpu implements  Cpu {

    setSeries(series: string): void {
        throw new Error("Method not implemented.");
    }
}

class LaptopCpu implements  Cpu {

    setSeries(series: string): void {
        throw new Error("Method not implemented.");
    }
}

class TabletCpu implements Cpu {

    setSeries(series: string): void {
        
    }
}

class PhoneMemory implements Memory {

    setCapacityInGB(capacity: number): void {
        throw new Error("Method not implemented.");
    }
}

class LaptopMemory implements Memory {

    setCapacityInGB(capacity: number): void {
        throw new Error("Method not implemented.");
    }
}

class TabletMemory implements Memory {

    setCapacityInGB(capacity: number): void {
        throw new Error("Method not implemented.");
    }
}

class PhoneDisplay implements Display {

    setResolution(): void {
        throw new Error("Method not implemented.");
    }
}

class LaptopDisplay implements Display {

    setResolution(): void {
        throw new Error("Method not implemented.");
    }
}

class TabletDisplay implements Display {

    setResolution(): void {
        throw new Error("Method not implemented.");
    }
}

//3.Interfaz Fabrica Abstracta declara el grupo de metodos, cada fabrica es sobre el producto especifico y retorna los sub-productos
// abstract class AbstractFactory {
//     public abstract createCpu(): Cpu;
//     public abstract createMemory(): Memory;
//     public abstract createDisplay(): Display;
// }

//4. Creaacion de la implementacion de los metodos concretos  de cada fabrica. Cada fabrica concreta corresponde a una variacion especifica del producto
//y crea unicamente esas variaciones de productos
import { AbstractFactory } from "./factories/AbstractFactory";
class PhoneFactory extends AbstractFactory{
    
    public createCpu(): Cpu {    
        throw new Error("Method not implemented")
    };

    public createMemory(): Memory {
        throw new Error("Method not implemented");
    }

    public createDisplay(): Display {
        throw new Error("Method not implemented");     
    }
}

class LaptopFactory extends AbstractFactory{
    
    public createCpu(): Cpu {    
        throw new Error("Method not implemented")
    };

    public createMemory(): Memory {
        throw new Error("Method not implemented");
    }

    public createDisplay(): Display {
        throw new Error("Method not implemented");     
    }
}

class TabletFactory extends AbstractFactory{
    
    public createCpu(): Cpu {    
        throw new Error("Method not implemented")
    };

    public createMemory(): Memory {
        throw new Error("Method not implemented");
    }

    public createDisplay(): Display {
        throw new Error("Method not implemented");     
    }
}

