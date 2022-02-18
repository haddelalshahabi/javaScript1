/* oppgave 1
Lag en HTML-knapp som kaller en JavaScript-funksjon som viser "Hei verden" på en blank side via "document.write". Bruk hendelsen "onClick" på knappen.

*/

function helloWorld(){
    document.write("Hello world!");
}


/*Oppgave 2
Gjør om oppgave 1 til å vise en "alert"-boks når knappen trykkes.
 */
function helloWorld(){
    alert("Hello woeld");
}

/*Oppgave 3
Lag et input-felt i en HTML-side. Lag et JavaScript som leser dataene fra input-feltet når det er endringer i feltet (hendelsen "onChange") og som skriver disse dataene ut på en blank side med "document.write". Funksjonen som kalles ved "onChange" skal ta en inn-parameter, som er verdien av input-feltet.
 */
function toNewPage(inputText){
    document.write(inputText)
}

/*Oppgave 4
Endre oppgave 3 ved å legge ut en "pop-up/alert"-boks som skal inneholde teksten fra input-feltet.
 */
function toAlert(inputText){
    alert(inputText)
}

/*Oppgave 5
Utvid oppgave 4 med å skrive informasjonen fra input-feltet til "console.log". Sjekk at dataene blir skrevet til loggen.
 */
function toConsole(inputText){
    console.log(inputText);
}

//Ekstraoppgaver
/*Oppgave 6
Utvid oppgave 3 ved å gi et farge til teksten som vises på blank side.
 */
function toNewPageColor(inputText){
    document.write(inputText.fontcolor("blue"));
}

/*Oppgave 7
Utvid oppgave 4 ved å vise input i alert boks i store bokstaver.
 */
function toUppercaseAlert(inputText){
    alert(inputText.toUpperCase())
}

/*Oppgave 8
Lag et knapp som skriver tall “1” til console (bruk console.log) hver gang den trykkes.
 */
function showOne(){
    console.log(1);
}

/*Oppgave 9
Utvid oppgave 8 slik at den skriver til console antall ganger knapp ble trykket. (Tell opp fra 1)
 */
let clicks = 0;
function showNrOfClicks(){
    clicks ++;
    console.log(clicks);
}

/*Oppgave 10
Endre oppgave 9 ved å legge til en melding til console slik at den viser "Du har trykket på knappen X ganger" (hvor X er antall ganger knappen ble trykket på).
 */
/*let clicksWithString = 0;
function nrOflicksWithString(){
    clicks++;
    console.log("This is the fancy version : ${nrOflicksWithString()}");
    console.log("This is the fancy version :" + $(nrOflicksWithString()) + " : (");

 */