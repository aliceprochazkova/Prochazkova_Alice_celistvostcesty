/* spolužák po levici:  */
/* spolužák po pravici: */
/* Zadání:
    Detekce celistvosti 1. cesty
    Z "nekonečné" řady souřadnic, které představují úsečky zjistěte, 
    zda první cesta je či není přerušena.
    (Program vypíše pouze jedno slovo: JE, anebo NENÍ)
   
    Pro hodnocení "nejlépe" 3 lze použít list úseček "dummy" (BrokenSegment a OkSegment). 
    Stačí detekovat přerušení. (Pokud by byla cesta uzavřena (celistvá), nic se nevypíše.)   
*/
/*class Point  {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
};*/
type Point = {
    x: number,
    y: number
}
type Line = {
    p1: Point,
    p2: Point
}

//let bod = new Point(1, 2);

//console.log(bod.x);
//console.log(bod.y);

/*const data: Array<Array<Array<number>>> = [[[0, -9], [-5, 6]], [[-5, 6], [1, 2]], [[1, 2], [0, 9]]];
let pocatecniBodPolynomu: Array<number> = data[0][0];
let bod1: Array<number> = pocatecniBodPolynomu;
let bod2: Array<number> = data[0][1];*/

//console.log(pocatecniBodPolynomu[0]);
//console.log(pocatecniBodPolynomu[1]);

const dummyBrokenSegment: Array<Line> = [
    { p1: { x: 0, y: -9 }, p2: { x: -5, y: 6 } },
    { p1: { x: -5, y: 6 }, p2: { x: 4, y: -1 } },
    { p1: { x: 4, y: -1 }, p2: { x: -5, y: -8 } },
    { p1: { x: -5, y: -8 }, p2: { x: 6, y: -9 } },
    { p1: { x: -4, y: 1 }, p2: { x: -2, y: 4 } }, //segment broken
    { p1: { x: -2, y: 4 }, p2: { x: 6, y: -3 } },
    { p1: { x: 6, y: -3 }, p2: { x: 0, y: -9 } } //end of polygon
]
let pocatecniBod: Point = dummyBrokenSegment[0].p1;
//console.log(pocatecniBod.x);
//console.log(pocatecniBod.y);

let bod1: Point = dummyBrokenSegment[0].p2;
let bod2: Point;
let preruseni: boolean = false;
for (let i: number = 1; i < dummyBrokenSegment.length; i++) {
    bod2 = dummyBrokenSegment[i].p1;
    console.log("bod1:");
    console.log(bod1.x);
    console.log(bod1.y);
    console.log("bod2:");
    console.log(bod2.x);
    console.log(bod2.y);
    if ((bod1.x === bod2.x) && (bod1.y === bod2.y)) {
        bod1 = dummyBrokenSegment[i].p2;
    }
    else {
        console.log("NENI");
        preruseni = true;
        break;
    }

}
if (preruseni === false) {
    if ((bod1.x === pocatecniBod.x) && (bod1.y === pocatecniBod.y)) {
        console.log("JE");
    }
}


const dummyOkSegment: Array<Line> = [
    { "p1": { "x": -4, "y": 9 }, "p2": { "x": 8, "y": -8 } },
    { "p1": { "x": 8, "y": -8 }, "p2": { "x": 4, "y": 6 } },
    { "p1": { "x": 4, "y": 6 }, "p2": { "x": -8, "y": -3 } },
    { "p1": { "x": -8, "y": -3 }, "p2": { "x": -9, "y": 10 } },
    { "p1": { "x": -9, "y": 10 }, "p2": { "x": -2, "y": 10 } },
    { "p1": { "x": -2, "y": 10 }, "p2": { "x": 6, "y": 7 } },
    { "p1": { "x": 6, "y": 7 }, "p2": { "x": -4, "y": 9 } }  //end of polygon
]//*//* */


pocatecniBod = dummyOkSegment[0].p1;
//console.log(pocatecniBod.x);
//console.log(pocatecniBod.y);

bod1 = dummyOkSegment[0].p2;
preruseni = false;
for (let i: number = 1; i < dummyOkSegment.length; i++) {
    bod2 = dummyOkSegment[i].p1;
    console.log("bod1:");
    console.log(bod1.x);
    console.log(bod1.y);
    console.log("bod2:");
    console.log(bod2.x);
    console.log(bod2.y);
    if ((bod1.x === bod2.x) && (bod1.y === bod2.y)) {
        bod1 = dummyOkSegment[i].p2;
    }
    else {
        console.log("NENI");
        preruseni = true;
        break;
    }

}
if (preruseni === false) {
    if ((bod1.x === pocatecniBod.x) && (bod1.y === pocatecniBod.y)) {
        console.log("JE");
    }
}

function zkontrolujCelistvost(pole: Array<Line>) {
    let pocatecniBod: Point = pole[0].p1;
    //console.log(pocatecniBod.x);
    //console.log(pocatecniBod.y);

    let bod1: Point = pole[0].p2;
    let bod2: Point;
    let preruseni: boolean = false;
    console.log("Funkce");
    for (let i: number = 1; i < pole.length; i++) {
        bod2 = pole[i].p1;
        console.log("bod1:");
        console.log(bod1.x);
        console.log(bod1.y);
        console.log("bod2:");
        console.log(bod2.x);
        console.log(bod2.y);
        if ((bod1.x === bod2.x) && (bod1.y === bod2.y)) {
            bod1 = pole[i].p2;
        }
        else {
            console.log("NENI");
            preruseni = true;
            break;
        }

    }
    if (preruseni === false) {
        if ((bod1.x === pocatecniBod.x) && (bod1.y === pocatecniBod.y)) {
            console.log("JE");
        }
    }
}
console.log("-----------------------------------------------------");
zkontrolujCelistvost(dummyBrokenSegment);
console.log("-----------------------------------------------------");
zkontrolujCelistvost(dummyOkSegment);

/* Výpisy pro seznámení s daty! Raději následně zakomentujte! */
//console.log("--- nextLine() ---")
//let line: Line = polyLine.nextLine()
/*console.logValue("1. úsečka: ", JSON.stringify(line))
console.logValue("její délka: ", getSegmentLength(line))
line = polyLine.nextLine()
console.logValue("2. úsečka: ", JSON.stringify(line))
console.logValue("její délka: ", getSegmentLength(line))

console.log("--- getAllLines() ---")
console.log(JSON.stringify(polyLine.getAllLines()))
*/