function fact(x) { 
if(x == 0) { 
return 1; 
} 
if(x < 0 ) { 
return undefined; 
} 
for(var i = x; --i; ) { 
x *= i; 
} 
calculator.display.value=x;
}

function changeSign(input) {
    if(input.value.substring(0, 1) == "-")
        input.value = input.value.substring(1, input.value.length)
    else
        input.value = "-" + input.value
}

function deleteChar(input) {
    input.value = input.value.substring(0, input.value.length - 1)
}