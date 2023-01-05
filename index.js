alert("Assalomu aleykum! Sayohat qilishga tayyormisiz?");
let summa = prompt("Qancha pul atagansz");


let yolkira_usd = 500;
let hotel_usd = 250;
let museum_evro = 120;

let evro_kurs = 12272;
let dollar_kurs = 10900;

let yolkira_sum = yolkira_usd * dollar_kurs;
let hotel_sum = hotel_usd * dollar_kurs;
let museum_sum = museum_evro * evro_kurs;

let xarajat = yolkira_sum + hotel_sum + museum_sum;

if(xarajat <= summa){
    alert("Shuncha yeg'ib qo'yibsiz kettik sayoxatga")
}
else if(xarajat > summa){
    alert("qanaqa sayoxat ishlash kerak, soqqani bos")
}
else{
    alert("pulni raqamda kiriting")
}