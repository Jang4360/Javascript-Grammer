let num=90
if (num>0) {
    console.log('양수입니다')
}
else if (num<0){
    console.log('음수입니다')
}
else if (num==0){
    console.log('0입니다')
}

if (num>=90 && num<=100) {
    console.log('A')
}
else if (num>=80 && num<=89){
    console.log('B')
}
else if (num>=70 && num<=79){
    console.log('C')
}
else if (num>=60 && num<=69){
    console.log('D')
}
else if (num<=59){
    console.log('F')
}

let skill=['html','css','javascript','react']
if (skill[skill.indexOf('javascript')] || skill[skill.indexOf('react')]) {
    if (skill[skill.indexOf('javascript')] && skill[skill.indexOf('react')]){
        console.log('합격')
    }
    else{
        console.log('예비')
    }
}
else {
    console.log('불합격')
}
let food='치킨'
switch(food){
    case'피자' :
        console.log('피자주세요')
        break;
    case '치킨' :
        console.log('치킨 주세요')
        break;
}
let hamb='햄버거'
let answer= hamb=='햄버거'? '햄버거 좋아':'햄버거 싫어'
console.log(answer)
let an= hamb=='피자'? '피자좋아': hamb=='햄버거'? '햄버거 좋아':'햄버거 싫어'
console.log(an)

for(let i=0;i<=10 ;i+=2){
    console.log('안녕',i)
}
for (let i=2;i<=9;i++){
    for(let a=1;a<=9;a++){
        console.log(a*i)
    }
}
let sum=0
for (let i=1;i<=100;i++) {
    sum+=i}
    
    console.log(sum)


for (let i=1;i<100;i++){
    if(i%2==1){
        console.log(i)
    }
}
for (let i=1;i<50;i++){
    let string=i.toString()
    let result=""
    for(let j=0;j<string.length;j++){
        if(string[j]=='3'|| string[j]=='6' ||string[j]=='9')
        result+="짝"
    }
    console.log(result.length>0? result:i)
    }


    

let b=7
for(let i=2;i<=b;i++){
    if(b%i==0){
        console.log('false')
    }
    else{console.log('true')}
}