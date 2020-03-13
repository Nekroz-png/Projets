// Javascript
var a;
var nombre = window.prompt("Saisissez le nombre cacher !")
a = 54; // Affectation

if (a==nombre) { // Comparaison
    alert("Bravo ! Ta gagner le droit de rejouer !");
}
else if (a < nombre)
{
    alert("plus petit !")
}
else {
    alert("plus grand !");
}
