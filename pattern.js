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