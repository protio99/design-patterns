import { Cpu } from '../interfaces/Cpu'

export class LaptopCpu implements  Cpu {

    setSeries(series: string): void {
        throw new Error("Method not implemented.");
    }
}