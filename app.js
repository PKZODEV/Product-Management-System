const express = require('express');
const app = express();
const port = 3000;

let products = [
    {id: "1",name: "hammer",price: 75},
    {id: "2",name: "mirror",price: 35},
    {id: "3",name: "broom",price: 75},
    {id: "4",name: "shampoo",price: 75},
    {id: "5",name: "soap",price: 75},
    {id: "6",name: "tablet",price: 6500},
]

app.get('/', (req,res) => {
    res.json(products);
});


app.listen(port , () =>{
    console.log(`Listening at http://localhost ${port}`);
});