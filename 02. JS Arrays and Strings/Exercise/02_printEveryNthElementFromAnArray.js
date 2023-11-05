function printElementFromAnArray(array, step) {
    let outputArr = [];
    
    for (let i = 0; i < array.length; i+= step) {
        let element = array[i];
        outputArr.push(element);
    }

    return outputArr;
}

printElementFromAnArray(['5', 
'20', 
'31', 
'4', 
'20'], 
2);