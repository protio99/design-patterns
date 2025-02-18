import { Memory } from "../interfaces/Memory";

export class TabletMemory implements Memory {

    setCapacityInGB(capacity: number): void {
        throw new Error("Method not implemented.");
    }
}