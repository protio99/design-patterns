import { Memory } from "../interfaces/Memory";

export class LaptopMemory implements Memory {

    setCapacityInGB(capacity: number): void {
        throw new Error("Method not implemented.");
    }
}