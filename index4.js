//array

//const listNilai = ['a','b','c']
//console.log(listNilai[0])

const dataMhs = [
    {
        nama: 'javandra savinsaka',
        npm: '19421066',
        prodi: 'Informatika'
    },
    {
        nama: 'penpen lupa nama panjangnya',
        npm: '19421051',
        prodi: 'Informatika'
    }
]

//console.log(dataMhs[0].nama)

for (let i in dataMhs){
    console.log(dataMhs[i].nama+ ' - '+ dataMhs[i].npm + ' - ' + dataMhs[i].prodi)
}