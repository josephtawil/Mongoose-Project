
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const shoeRoutes = require("./routes/shoe-routes");
app.use(shoeRoutes);


app.listen(PORT,()=>console.log(`Listening on http://localhost:${PORT}`));