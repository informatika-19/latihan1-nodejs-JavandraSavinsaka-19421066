const nilai = 80
let huruf, ket
//logic bercabang
if (nilai >= 85) {
    huruf='A'
    ket = 'Sangat Baik'
}else if (nilai >= 75 && nilai <= 85){
    huruf='B'
    ket = 'Baik'
}else if (nilai >= 65 && nilai <= 75){
    huruf='C'
    ket = 'Cukup'
}else if (nilai >= 55 && nilai <= 65){
    huruf='D'
    ket = 'Buruk'
}else{
    huruf='E'
    ket = 'Sangat Buruk'
}
console.log('Nilai anda ='+ " "+ huruf + ' ' +'( '+ket+' )')
