const coding = ["js", "ruby", "cpp", "python", "rust"]

// coding.forEach( function (item ) {
//     console.log(val);
// } )

// coding.forEach( (val) => {
//     console.log(val); 
// })

// function printme(item){
//     console.log(item);
// }

// coding.forEach(printme)

// coding.forEach( (item, indexx, arr) => {
//     console.log(item, indexx, arr);    
// })

const mycoding = [
    {
        languagename: "javascript",
        languagefilename: "js",
    },
    {
        languagename: "java",
        languagefilename: "java",
    },
    {
        languagename: "ruby",
        languagefilename: "rb",
    },
]

mycoding.forEach( (key) => {
    console.log(key.languagename);   
})