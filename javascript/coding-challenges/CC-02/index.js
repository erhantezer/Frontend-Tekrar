console.log("*********** Fibonacci Number ************");

let fib = +prompt("Kaçıncı fib sayısına ulaşmak istersiniz");

let seri = [1];
function fibonacci(num) {
    
    for(let i= 1; i < 10; i++){
        if(i === 1){
            seri.push(i)
        }else {
            seri.push(seri[i-2] + seri[i-1])
        }
        
    }
    return seri[num-1]
}

console.log(fibonacci(fib));
