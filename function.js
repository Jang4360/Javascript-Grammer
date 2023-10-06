
function greet(name){
    console.log(`안녕 내 이름은${name}야`)
    return name
}
const na=greet('jesica')
console.log('안녕 내 이름은',na,'야')



function meetAt(year,month,day){
    if(day){
        return(console.log(`${year}년${month}월${day}일`))
    }
    if(month){
        return(console.log(`${year}년${month}월`))
    }
    
    if(year){
        return(console.log(`${year}년`))
    }
}
meetAt(1245)

function findSmallestElement(arr){
    let result=arr[0]
    if(arr.length===0){
        return 0;
    }
    for (let i=1 ;i<arr.length;i++){
        if(result>arr[i]){
            result=arr[i]
        }
    }
    return result;
}
console.log(findSmallestElement([5,1,1.5]))

list=[50000,10000,5000,1000,100]
function money(payment){
    for (i=0;i<list.length;i++){
        let num=parseInt(payment/list[i])
        console.log(list[i],'X',num)
        payment=payment-num*list[i]
    
}  
}
money(75400)

function find(arr){
    let first=arr[0]
    if (arr.length===0){
        return 0;
    }
    for (let i=1;i<arr.length;i++){
        if (first<arr[i]){
            first=arr[i]
        }
    }
    return first
}
console.log(find([5,0,10]))

let gold=[50000,10000,5000,1000,500,100]
function cash(money){
    for(let i=0;i<gold.length;i++){
        let num= parseInt(money/gold[i])
        console.log(`${gold[i]}X${num}`) 
        money=money-num*gold[i]
    }

}
console.log(cash(77600))