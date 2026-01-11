const mynums = [1, 2, 3, 4, 5]

// const mysum = mynums.reduce(function (acc, cv) { 
//     console.log(`acc: ${acc} and cv:${cv}`);
//     return acc + cv
// }, 10)

const mysum = mynums.reduce( (acc,cv) => acc+cv, 0 )

console.log(mysum);

const shoppingcart = [
    {
        itemname: "course ds",
        price: 99,
    },
    {
        itemname: "course py",
        price: 999,
    },
    {
        itemname: "course ai",
        price: 9999
    }
]

const shpct = shoppingcart.reduce( (acc,item) => acc+item.price,0)

console.log(shpct);
