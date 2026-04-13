let x
x = +prompt('Mutqagreq tiv vori faktorialy uzum eq hashvel',5)
function factorial(){
    let n = x
    if (x === 0) 
        {n = 1}
    else{ 
    for(let i = 1 ; x-i > 0 ; i++){
        n *= (x-i)
    }
    }
    alert(n)
}

factorial()