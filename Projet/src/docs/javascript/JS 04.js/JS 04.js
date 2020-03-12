var nom = window.prompt("Quelle est votre nom ?")
var prenom = window.prompt("Quelle est votre prenom ?")
var sexe = (window.confirm("Etes vous un homme ?") == true)
if (sexe)
{
    alert("bienvenue monsieur " + nom + " " + prenom)
}
else
{
    alert("bienvenue madame " + nom + " " + prenom) == false
}