# Abstract Factory 🏭  

The **Abstract Factory** design pattern works under the idea of creating **factories of factories**.  
To be honest, it was a bit confusing at the beginning because it's easy to get lost with all the concepts and the huge number of classes and interfaces involved if you don't pay attention.  

---

## 🔹 Summary of Implementation Steps  

### 📌 Used Example  
In this example, I used an exercise proposed by the **Platzi Design Patterns course**.  

🖼️ **Base Diagram:**  
![Abstract Factory Challenge](/assets/abstract-factory-challenge.png)  

📚 **Course URL:** [Platzi - Creational Design Patterns](https://platzi.com/cursos/patrones-diseno-creacionales/)  

---

### 🛠️ Steps to Implement  

1️⃣ **Create the interfaces for each abstract product**  
   - `Cpu`, `Memory`, `Display`  

2️⃣ **Create the concrete implementations for each product family** (`Phone`, `Laptop`, `Tablet`)  
   - Each family must implement all the possible product variations, for example:  
     - `LaptopCpu`, `LaptopDisplay`, `LaptopMemory`  
     - `PhoneCpu`, `PhoneDisplay`, `PhoneMemory`  
     - `TabletCpu`, `TabletDisplay`, `TabletMemory`  

3️⃣ **Declare the abstract factory**  
   - This factory contains the creation methods for each product interface:  
     - `createCpu()`, `createDisplay()`, `createMemory()`  

4️⃣ **Create the concrete factories for each family**  
   - `LaptopFactory`, `PhoneFactory`, `TabletFactory`  

---

### ⚠️ **Important Note**  
Be careful! This pattern can be really confusing at first.  
Make sure **not to mix the concept of families and products** while implementing it.  

---

## 📌 General Structure of the Pattern  

🖼️ **Abstract Factory Structure:**  
![Abstract Factory Structure](/assets/abstract-factory-structure.png)  

🔗 **Diagram source:** [Refactoring Guru - Abstract Factory](https://refactoring.guru/es/design-patterns/abstract-factory)  

---

I hope this helps clarify the **Abstract Factory** pattern! 🚀  


  