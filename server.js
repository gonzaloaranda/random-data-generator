import express from "express";
import getPokemon from "./poke_api.js";

const app = express();

app.get("/pokemon", async (req, res) => {
  try {
    const pokemon = await getPokemon();
    res.json(pokemon);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener un Pokémon" });
  }
});

app.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 3000");
});
