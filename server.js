import express from "express";
import Pokemon from "./poke_api.js";

const app = express();

app.get("/pokeazar", async (req, res) => {
  try {
    const pokemon = await getPokemon();
    res.json(pokemon);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener un Pokémon" });
  }
});

app.listen(3000, () => {
  console.log("Server OK");
});
