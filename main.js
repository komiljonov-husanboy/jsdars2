// masala-1
let a = 20
let b = 10 
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
// masala-2
let c = 2
console.log(c**2);
console.log(c**3);
// masala-3
//  1
let juft = 10
if (juft % 2 == 0) {
    console.log("Juft son");
}
else{
    console.log("Toq son");
}
// 2
let toq = 9
if (toq % 2 == 0) {
    console.log("Juft son");
}
else{
    console.log("Toq son");
}
// masala-4
let number1 = 15
let number2 = 20

if (number1 > number2) {
    console.log("1-son Katta");
}else if( number1 < number2){
    console.log("2-son Katta");
}
else{
    console.log("Ikkala son teng");
}
// masala-5
let yosh = +prompt("Yoshingizni kiriting !")
if (yosh >= 18) {
    console.log("Voyaga yetgan");
}
else{
console.log("Voyaga yetmagan");
}
// masala-6
let ball = +prompt("Balingizni kiriting !")
if (ball >= 90) {
    console.log("A'lo");
} else if(ball >= 70) {
console.log("Yaxshi");
}
else if(ball >= 50){
    console.log("Qoniqarli");
}else{
    console.log("Qoniqarsiz");
}
// masala-7
let number3 = -1
if (number3 > 0) {
    console.log("musbat son");
} else if(number3 < 0){
    console.log("manfiy son");
}else{
    console.log("0 ga teng");
}
// masala-8
let x = 10
if ( x > 5) {
    console.log(x*2);
}
else{
    console.log(x/3);
}
// masala-9
 a = 4
 b = 7
c = a + b
if ( c > 10) {
    console.log("Katta sonlar");
}else{
    console.log("Kichik sonlar");
}
// masala-10
numm = 22
if ( numm % 3 == 0 && numm % 5 == 0) {
console.log("FizzBuzz");
}else if (numm % 3 == 0) {
    console.log("Fizz");
}else if (numm % 5 == 0) {
    console.log("Buzz");
}
else{
    console.log("Bu Oddiy son");
}
// masala-11
let yil = +prompt("11-Masala   Yilni Kiriting")
 if ( yil % 4 == 0) {
    console.log("Kasiba yili");
 }
 else{
    console.log("Oddiy yil");
 }
//  masala-12
let harorat = +prompt("12-Masala Haroratni kiriting !")
if (harorat > 30) {
    console.log("issiq");
}else if (harorat >= 20) {
    console.log("Yoqimli");
}
else{
    console.log("sovuq");
}
// masala-13
let conform = confirm("Davom etasizmi ?")
if (conform == true) {
    console.log("Davom etildi");
}
else{
    console.log("Bekor qilindi");
}
// masala-14
let names = prompt(" Masala-14 Ismingizni kiriting:")
if (names) {
    console.log(`salom ` +  names);
}else{
    console.log("Ism Kiritilmadi!");
}
// masala-15
son = 12
natija = son / 2
if (natija > 5 ) {
    console.log("Natija Katta ");
}else{
    console.log("Natija kichik");
    }
 // masala-16
let pass = +prompt("Masala-16 Parol kiriting:")
if (pass == 1234) {
    console.log("Kirish Muvofaqqiyatli");
}else{
    console.log("Xato parol");
}
// masala-17
 a = 12
 b = 15
 c = 9
 if (a >= b && a >= c) {
    console.log("eng katta son - " , a);
 }else if  (b >= a && b >= c) {
    console.log("eng katta son - " , b);
 }else{
    console.log("eng katta son - " , c);
 }
//  masala-18
 a = 12
 b = 8
 c = a + b
 if (c % 2 ==  0) {
    console.log("Juft son");
 }else{
    console.log("Toq son");
 }
//  masala-19
// BU mavzu hali o'tilmagan

// masala-20
let sonlarA = +prompt("20-Masala    1- son kiriting:")
let sonlarB = +prompt("20-Masala    2- son kiriting:")
if (sonlarA > 0 && sonlarB > 0) {
    console.log("Ijobiy sonlar");
}else if(sonlarA < 0 && sonlarB < 0 ){
    console.log("Salbiy sonlar");
}else{
    console.log("turli belgili sonlar sonlar");
}