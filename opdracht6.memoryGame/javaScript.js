var winner = null;
var zetten = 0;
var laatstGekilkt = null;
var volgendeZet = true;

var puntenJan = 0;
var puntenPascal = 0;
var spelers = ["Dylan", "Timo"];

var openKaarten = [null, null];
var spelerAanZet = Math.floor(Math.random() * 2);

toonPlayer();
toonScore();
opdrachtGeklikteKaart();

function opdrachtGeklikteKaart() {
    if (this.id !== laatstGekilkt && volgendeZet) {
        zetten++;
        laatstGekilkt = this.id;
        draaiKaart(this.id);
        if (zetten === 2) {
            zoekVoorMatch();
            resetVariabelen();
        }
    }
}