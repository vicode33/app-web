const express = require("express");
const app = express();
const path = require("path");

// Configurar EJS como motor de plantillas
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
// Servir archivos estáticos (CSS, imágenes, JS)
app.use(express.static("public"));

// Ruta para la página principal
app.get("/", (req, res) => {
    res.render("index", { title: "Thinkbots Inicio" });
});
app.get("/blog", (req, res) => {
    res.render("blog", { title: "Thinkbots Blog" });
});
app.get("/catalogo", (req, res) => {
    res.render("catalogo", { title: "Thinkbots Catalogo" });
});
app.get("/contacto", (req, res) => {
    res.render("contacto", { title: "Thinkbots Contacto" });
});
app.get("/carrito", (req, res) => {
    res.render("carrito", { title: "Thinkbots Carrito de compra" });
});

// Servidor en el puerto 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});




