const express = require("express");
const app = express();
const port = 3000;

const Product = [
  { id: 1, name: "hammer", category: "work", stock: 10 },
  { id: 2, name: "glasses", category: "work", stock: 10 },
];

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Defualt Page");
});

app.get("/products", (req, res) => {
  res.json(Product);
});

app.get("/products/:id", (req, res) => {
  const ShowProductbyId = Product.find(
    (product) => product.id === parseInt(req.params.id)
  );
  if (!ShowProductbyId)
    return res.status(404).json({ error: "ไม่มีสินค้าชิ้นนี้" });
  res.json(ShowProductbyId);
});

app.post("/products", (req, res) => {
  const AddProduct = {
    id: Product.length + 1,
    name: req.body.name,
    category: req.body.category,
    price: req.body.price,
    stock: req.body.stock,
  };
  Product.push(AddProduct);
  res.json(Product);
});

app.put("/products/:id", (req, res) => {
  if (!req.body || !req.body.name) {
    return res.status(402).json({ error: "ไม่มีข้อมูล name ในคำขอ" });
  }
  const UpdateProductbyId = Product.find(
    (product) => product.id === parseInt(req.params.id)
  );
  if (!UpdateProductbyId)
    return res.status(404).json({ error: "ไม่มีสินค้าชิ้นนี้" });
  UpdateProductbyId.name = req.body.name;
  UpdateProductbyId.category = req.body.category;
  UpdateProductbyId.price = req.body.price;
  UpdateProductbyId.stock = req.body.stock;
  res.json(Product);
});

app.delete("/products/:id", (req, res) => {
  const index = Product.findIndex(
    (product) => product.id === parseInt(req.params.id)
  );
  if (index === -1)
    return res.status(404).json({ error: "ไม่มีสินค้าชิ้นนี้" });
  const DeletedProduct = Product.splice(index, 1);
  res.json(DeletedProduct);
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
