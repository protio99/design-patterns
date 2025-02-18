import { Memory } from "../interfaces/Memory";

export class PhoneMemory implements Memory {

    setCapacityInGB(capacity: number): void {
        throw new Error("Method not implemented.");
    }
}