let percen = false;

/**
    Variabel berikut adalah variabel untuk menampung
    input dari elemen HTML dengan id displayText
 */
let result=document.getElementById("displayText");

/**
    Fungsi berikut adalah fungsi untuk merekam
    seluruh angka dan operasi yang dimasukan
 */
let kalkulasi=(number)=>{
    if(!percen) {
        result.value+=number;        
    }
    else {
        // clr();
        percen = false;
        kalkulasi(number);
    }
    console.log(result.value);
}

/**
    Fungsi berikut adalah fungsi untuk menghitung 
    seluruh operasi yang telah diinputkan
 */
let Result=()=>{
    try{
        result.value=eval(result.value)
        // Apabila terdapat nilai NaN dari operasi 0/0
        // maka akan menampilkan pesan error
        if (isNaN(result.value)) {
            result.value = "Error";
            alert("Tidak dapat membagi 0 dengan 0");
        }
    }
    catch(err){
        alert("Enter the valid input")
    }
}

/**
    Fungsi berikut adalah fungsi untuk menghapus 
    seluruh inputan yang telah diinputkan
 */
function clr(){
    result.value= " ";
    document.getElementById("displayText").placeholder="0";
}

/**
    Fungsi berikut adalah fungsi untuk menghapus
    inputan terakhir yang telah diinputkan
 */
function del(){
    result.value=result.value.slice(0,-1);
}

/**
    Fungsi berikut adalah fungsi untuk melakukan
    persentase pada inputan yang telah diinputkan
 */
function percentage() {
    console.log(result.value);
    // jika tidak ada operasi maka
    // akan menampilkan nilai 0
    if(result.value == " ") {
        result.value = 0;
    }
    // if di bawah in akan mengecek apakah ada 
    // operator yang sedang dikerjakan.
    // jika ada maka akan menghitung nilai terlebih dahulu
    // barulah akan dilakukan persentase
    if(['+', '-', '*', '/'].some(v => result.value.includes(v))) {
        result.value = eval(result.value);
        result.value = result.value / 100;
    }
    else if (result.value != 0) {
        result.value = result.value / 100;
    }
    percen = true;
}

/**
    Fungsi berikut adalah fungsi untuk melalukan
    perhitungan negatif atau positif
 */
function posOrNeg() {
    if(result.value == " ") {
        result.value = 0;
    }
    if(['+', '-', '*', '/'].some(v => result.value.includes(v))) {
        result.value = eval(result.value);
        result.value = result.value * -1;
    }
    else if (result.value != 0) {
        result.value = result.value * -1;
    }
}