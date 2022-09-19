/*method=function
atribute=status
method=conportment
*/
class Animal {
    constructor(name) {
        this._name = name
    }
    get get() {
        return this._name
    }

    set change(name) {
        return this._name = name
    }
}

var object1 = new Animal('Conejo');
console.log(object1)

//console.log(object1.get());

Animal.change = ('perro')
console.log(Animal.change)


//Escriba metodos para suma, promedio mayor y menor
//Escriba clase que represente un producto comercial=Constructor, set, get, metodo para calcular el valor antes y despues del iva
//Leer pagina 149-161 del libro= CAP 7  //-------  Desarrollar todos los ejercicios



//Escriba metodos para suma, promedio mayor y menor

var sum, promedio

function operations(num1, num2, num3, num4) {
    console.log(`Los numeros son: ${num1},${num2},${num3},${num4}`)
        //suma
    sum = num1 + num2 + num3 + num4
    console.log('La suma de todos los numeros es:', sum)
        //promedio
    promedio = sum / 4;
    console.log('El promedio de todos los numeros es', promedio)
        //numero mayor 
    if ((num1 > num2) && (num1 > num3) && (num1 > num4)) {
        console.log('El numero mayor es', num1)
    } else if ((num2 > num1) && (num2 > num3) && (num2 > num4)) {
        console.log('El numero mayor es', num2)
    } else if ((num3 > num1) && (num3 > num2) && (num3 > num4)) {
        console.log('El numero mayor es', num3)
    } else {
        console.log('El numero mayor es', num4)
    }
    //numero menor 
    if ((num1 < num2) && (num1 < num3) && (num1 < num4)) {
        console.log('El numero menor es', num1)
    } else if ((num2 < num1) && (num2 < num3) && (num2 < num4)) {
        console.log('El numero menor es', num2)
    } else if ((num3 < num1) && (num3 < num2) && (num3 < num4)) {
        console.log('El numero menor es', num3)
    } else {
        console.log('El numero menor es', num4)
    }
}
operations(5, 2, 4, 3);

/*Escriba clase que represente un producto comercial=
Constructor, set, get, metodo para calcular el valor antes y despues del iva */
class producto_comercial {
    constructor(price) {
        this.price = price
    }
}

//Leer pagina 149-161 del libro= CAP 7  //-------  Desarrollar todos los ejercicios
function Dog(dogName, weight, color, breed) {
    this.dogName = dogName;
    this.weight = weight;
    this.color = color;
    this.breed = breed;
}
let dog = new Dog("Jacky", 30, "brown", "labrador");
console.log(Dog.dogName)


class Dog {
    constructor(dogName, weight, color, breed) {
        this.dogName = dogName;
        this.weight = weight;
        this.color = color;
        this.breed = breed;
    }
}
let dog2 = new Dog("JavaScript", 2.4, "brown", "chihuahua");
console.log(dog2.dogname) console.log(dog2.dogName, "is a", dog2.breed, "and weighs", dog2.weight,
    "kg.");

/*
Practice exercise 7.1
Take the following steps to create a person class, and print instances of friends'
names:
1. Create a class for Person including the constructor for firstname and
lastname.
2. Create a variable and assign a value of the new Person object using your
friend's first and last names.
3. Now add a second variable with another friend's name using their first name
and last name.
4. Output both friends into the console with a greeting of hello.
    */
class person {
    constructor(firtsname, lastname) {
        this.firtsname = firtsname;
        this.lastname = lastname;
    }
}
let object1 = new person('Juan', 'perez');
var object2 = new person('Lorena ', 'Rodriguez');
console.log(object1, object2);

/*
Practice exercise 7.2
Get your friend's full name:
1. Using the Person class from Practice exercise 7.1, add a method called
fullname, which returns the concatenated value of firstname and lastname
when invoked.
2. Create values for person1 and person2 using two friends' first and last names.
3. Using the fullname method within the class, return the full name of one or
both people.
*/

class person {
    constructor(firtsname, lastname, age, height) {
        this.firtsname = firtsname;
        this.lastname = lastname;
        this.age = age;
        this.height = height;
    }

    fullname() {
        console.log(this.firtsname + ' ' + this.lastname)
    }
    bothfullname() {
        console.log(this.firtsname + ' ' + this.lastname)
    }
}
let object1 = new person('Juan', 'Perez', '19', '1.85');
var object2 = new person('Lorena ', 'Rodriguez', '25', '1.70');
console.log(object1, object2);
//Return one of two people's firtsname and lastname
var n = Math.round(Math.random() * 3);
if (n == 1) {
    object1.fullname();

} else if (n == 2) {
    object2.fullname();
} else {
    object1.bothfullname() + object2.bothfullname()
}