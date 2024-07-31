// windi sintiyani
/**
 * TOOD:
 * 1. Buatlah variabel currency yang merupakan Map dengan kriterie:
 *     -key "USD", value 14000
 *     -key "JPY", value 131
 *     -key "SGD", value 11000
 *     -key "MYR", value 3500
 * 2. Buatlah variabel priceInIDR yang bernilai dari hasil perkalian:
 *     -priceInJPY dengan nilai currency JPY
 */

const priceInJPY = 5000;

// ketikan kode di bawah ini
// TODO #1
const currancy = new Map ([
    ["USE",14000],
    ["JPY",131],
    ["SGD",11000],
    ["MYR",3500]
]);
// TODO #2
const priceInIDR = priceInDR * currancy.get("JPY");

// Hiraukan kode di bawah ini
console.log(princeInDR);