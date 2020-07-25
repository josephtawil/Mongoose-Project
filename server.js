
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require("mongoose");
mongoose.set('useCreateIndex', true);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//we added those methods in the second parameter for the depreciation warning
mongoose.connect("mongodb://localhost/shoe_db",{ useNewUrlParser: true, useUnifiedTopology: true  });

const shoeRoutes = require("./routes/shoe-routes");
app.use(shoeRoutes);


app.listen(PORT,()=>console.log(`Listening on http://localhost:${PORT}`));