let NombreInput = prompt("Ingresa tu nombre");
let RamoInput = prompt("Ingrese Ramo");
let Nota1Input = parseFloat(prompt("Ingrese Nota1"));
let Nota2Input = parseFloat(prompt("Ingrese Nota2"));
let Nota3Input = parseFloat(prompt("Ingrese Nota3"));

document.getElementById("nombreDiv").textContent = "Nombre: " + NombreInput;
document.getElementById("Ramo").textContent = RamoInput;
document.getElementById("Nota1").textContent = Nota1Input;
document.getElementById("Nota2").textContent = Nota2Input;
document.getElementById("Nota3").textContent = Nota3Input;

let promedio = (Nota1Input + Nota2Input + Nota3Input) / 3;
document.getElementById("Promedio").textContent = promedio.toFixed(2);



/* let NombreInput = prompt("Ingresa tu nombre");
    let CarreraInput = "Desarrollador Web"; // Carrera fija para este ejemplo

    document.getElementById("nombreDiv").innerHTML = "<strong>Nombre:</strong> " + NombreInput + "<br><strong>Carrera:</strong> " + CarreraInput;

    // Notas para el primer ramo
    let Nota11Input = parseFloat(prompt("Ingrese Nota1 para HTML"));
    let Nota21Input = parseFloat(prompt("Ingrese Nota2 para HTML"));
    let Nota31Input = parseFloat(prompt("Ingrese Nota3 para HTML"));

    document.getElementById("Nota11").textContent = Nota11Input;
    document.getElementById("Nota21").textContent = Nota21Input;
    document.getElementById("Nota31").textContent = Nota31Input;

    let promedio1 = (Nota11Input + Nota21Input + Nota31Input) / 3;
    document.getElementById("Promedio1").textContent = promedio1.toFixed(2);

    // Notas para el segundo ramo
    let Nota12Input = parseFloat(prompt("Ingrese Nota1 para CSS"));
    let Nota22Input = parseFloat(prompt("Ingrese Nota2 para CSS"));
    let Nota32Input = parseFloat(prompt("Ingrese Nota3 para CSS"));

    document.getElementById("Nota12").textContent = Nota12Input;
    document.getElementById("Nota22").textContent = Nota22Input;
    document.getElementById("Nota32").textContent = Nota32Input;

    let promedio2 = (Nota12Input + Nota22Input + Nota32Input) / 3;
    document.getElementById("Promedio2").textContent = promedio2.toFixed(2);

    // Notas para el tercer ramo
    let Nota13Input = parseFloat(prompt("Ingrese Nota1 para JavaScript"));
    let Nota23Input = parseFloat(prompt("Ingrese Nota2 para JavaScript"));
    let Nota33Input = parseFloat(prompt("Ingrese Nota3 para JavaScript"));

    document.getElementById("Nota13").textContent = Nota13Input;
    document.getElementById("Nota23").textContent = Nota23Input;
    document.getElementById("Nota33").textContent = Nota33Input;

    let promedio3 = (Nota13Input + Nota23Input + Nota33Input) / 3;
    document.getElementById("Promedio3").textContent = promedio3.toFixed(2);


    hasta aqui esta tabla, funciona








primer intento de javascript no resulto sacar el promedio


/*
let Nombre = document.getElementById("Nombre");
let Ramo = document.getElementById("Ramo");
let Nota1 = document.getElementById("Nota 1");
let Nota2 = document.getElementById("Nota 2");
let Nota3 = document.getElementById("Nota 3");
let Promedio = document.getElementById("Promedio");

Nombre.innerHTML = prompt("Ingresa tu nombre");
Ramo.innerHTML = prompt("Ingrese Ramo ");
Nota1.innerHTML = prompt("Ingrese Nota1");
Nota2.innerHTML = prompt("Ingrese Nota2");
Nota3.innerHTML = prompt("Ingrese Nota3");
Promedio.innerHTML = (eval(Nota1) + eval(Nota2) + eval(Nota3)) / 3; 

/*let Promedio = (eval(Nota1) + eval(Nota2) + eval(Nota3)) / 3;
Promedio

/*Promedio.innerHTML = `El promedio de la nota es: ${Promedio}`;/

/*Nombre.innerHTML= NombreData
Ramo.innerHTML= RamoData
Nota1.innerHTML= Nota1Data
Nota2.innerHTML = Nota2Data
Nota3.innerHTML = Nota3Data
Promedio.innerHTML= PromedioData */
