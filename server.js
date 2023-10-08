const express = require("express");
const app = express();
const port = 3000;
const Product = require("./product");

app.use(express.json())

app.get("/", (req, res) => {
  res.send("Default Page");
});

app.get("/product", (req, res) => {
  try {
    res.json(Product);
  } catch (error) {
    console.error("หาข้อมูลสินค้าไม่เจอ:", error);
    res.status(404).json({ error: "Not Found" });
  }
});

app.get("/product/:id", (req, res) => {
  try {
    const ShowProductbyID = Product.find(
      (product) => product.id === parseInt(req.params.id)
    );
    res.json(ShowProductbyID);
  } catch (error) {
    console.error("หาข้อมูลสินค้าไม่เจอ:", error);
    res.status(404).json({ error: "Not Found" });
  }
});

app.post("/product", (req, res) => {
  try {
    const AddProduct = {
      id: Product.length + 1,
      name: req.body.name,
      category: req.body.category,
      price: req.body.price,
      stock: req.body.stock,
    };
    Product.push(AddProduct);
    res.json(AddProduct);
  } catch (error) {
    console.error("เพิ่มข้อมูลสินค้าไม่ได้:", error);
    res.status(404).json({ error: "Cannot Add Product" });
  }
});

app.put("/product/:id", (req, res) => {
  try {
    const EditProductbyID = Product.find(
      (product) => product.id === parseInt(req.params.id)
    );
    EditProductbyID.name = req.body.name;
    EditProductbyID.category = req.body.category;
    EditProductbyID.price = req.body.price;
    EditProductbyID.stock = req.body.stock;
    res.json(EditProductbyID);
  } catch (error) {
    console.error("หาข้อมูลสินค้าไม่เจอ:", error);
    res.status(404).json({ error: "Not Found" });
  }
});

app.delete("/product/:id", (req, res) => {
  try {
    const ProductIndex = Product.findIndex(
      (product) => product.id === parseInt(req.params.id)
    );
    const DeleteProductbyID = Product.splice(ProductIndex, 1)
    res.json(DeleteProductbyID);
  } catch (error) {
    console.error("หาข้อมูลสินค้าไม่เจอ:", error);
    res.status(404).json({ error: "Not Found" });
  }
});

app.listen(port, () => {
  console.log(`server running at http://localhost${port}`);
});
