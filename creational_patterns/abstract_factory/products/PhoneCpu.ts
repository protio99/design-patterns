import { Cpu } from '../interfaces/Cpu'

export class PhoneCpu implements  Cpu {

    setSeries(series: string): void {
        throw new Error("Method not implemented.");
    }
}