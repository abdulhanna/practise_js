// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

function pattern(){
    let row = 5
    let pat = ""

    for(let i=1;i<arr.length;i++){
        for(let j=1;j<=i;j++){
            pat += j
    }
        pat += "\n"
    }
    console.log(pat)
}

// 1
// 22
// 333
// 4444
// 55555


function pattern1(){
    let row = 5
    let pat = ""

    for(let i=1;i<arr.length;i++){
        for(let j=1;j<=i;j++){
            pat += i
    }
        pat += "\n"
    }
    console.log(pat)
}

// 1 
// 2 3 
// 4 5 6 
// 7 8 9 10 
// 11 12 13 14 15 
function pattern2(){
    let row = 5
    let pat = ""
    let variable = 1

    for(let i=1;i<=row;i++){
        for(let j=1;j<=i;j++){
            pat += variable + " "
            variable++
    }
        pat += "\n"
    }
    console.log(pat)
}


// 1 8 14 19 23 26 28
// 2 9 15 20 24 27
// 3 1016 21 25
// 4 1117 22
// 5 1218
// 6 13
// 7
function reversePattern(){
    let pat = ''
    let rows = 7
    for(let i=1;i<=rows;i++){
        let current = i
        pat += current  + " "
        for(let j=rows;j>=i+1;j--){
            current += j
            pat += current  + " "
        }
        pat += "\n"
    }
    return pat
}
console.log(pattern())
