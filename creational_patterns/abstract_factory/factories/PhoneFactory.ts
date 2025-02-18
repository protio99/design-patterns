import { AbstractFactory } from './AbstractFactory'
import { Cpu } from '../interfaces/Cpu'
import { Memory } from '../interfaces/Memory'
import { Display } from '../interfaces/Display'

export class PhoneFactory extends AbstractFactory{
    
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