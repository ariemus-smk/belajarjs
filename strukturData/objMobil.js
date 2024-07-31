const Mobil = {
    merek   : "Toyota",
    type    : "Avanza",
    tahun   : "2021"
};

const {merek, type} =  Mobil;
const {merek: a, type: b} =  Mobil;
console.log(`Merek ${a} dan tipe ${b}`);