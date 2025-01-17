const fruits = ["Olma", "Banan", "Gilos", "Shaftoli"]
console.log(fruits);

// const oquvchilar = ["olma", "Banan", "Gilos", "Shaftoli"]

const userName = prompt("Soz kiriting")
const tanlash = +prompt("1)  Array boshidan qoshish  (unshif) \n  2)  Array oxiridan qoshish (push) \n   3) Array oxiridan olish  (pop) \n  4) Array boshidan olish  (shift) \n" )

if(tanlash == 1){
    fruits.unshift(userName);
    console.log(fruits);
}else if(tanlash == 2){
    fruits.push(userName);
    console.log(fruits);
}else if(tanlash == 3){
    fruits.pop(userName);
    console.log(fruits);
}else if(tanlash == 4){
    fruits.shift(userName);
    console.log(fruits);
}else{
    alert("Iltimos son kiriting")
}
