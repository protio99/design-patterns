//PASO 1: Crear una interfaz del adaptador concreto
interface HttpAdapter {
    adapterName: string;
    get(): void;
    post(): void;
    put(): void;
    delete(): void;
}
//PASO 2: Crear una clase concreta que implemente la interfaz
class ConcreteHttpAdapter implements HttpAdapter {
    adapterName: string;
    constructor(adapterName: string) {
        this.adapterName = adapterName;
    }
    get() {
        console.log(`GET request using ${this.adapterName}`);
    }
    post() {
        console.log(`POST request using ${this.adapterName}`);
    }
    put() {
        console.log(`PUT request using ${this.adapterName}`);
    }
    delete() {
        console.log(`DELETE request using ${this.adapterName}`);
    }
}
//PASO 3: Crear una clase abstracta que contenga el método de fábrica
abstract class HttpAdapterFactory {
    public abstract makeAdapterFactory() : HttpAdapter

}
//PASO 4: Crear una clase concreta que extienda la clase abstracta
class ConcreteHttpAdapterFactory extends ConcreteHttpAdapter {
    makeAdapterFactory(): HttpAdapter {
        return new ConcreteHttpAdapter(this.adapterName);
    }
}


