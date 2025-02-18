import { Cpu } from '../interfaces/Cpu'
import { Memory } from '../interfaces/Memory'
import { Display } from '../interfaces/Display'

export abstract class AbstractFactory {
    public abstract createCpu(): Cpu;
    public abstract createMemory(): Memory;
    public abstract createDisplay(): Display;
}