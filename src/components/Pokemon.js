import React, { useEffect, useState } from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { Typography } from "@material-ui/core";
import { pokemonIds } from "../source/pokemonIds";

const Pokemon = ({ id }) => {
  const [pokemon, setPokemon] = useState();
  const getPokemon = async () => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${id}/`
    );
    const data = await response.json();
    setPokemon(data);
  };
  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <>
      <TableRow hover role="checkbox" tabIndex={-1}>
        <TableCell>
          <Typography variant="body1">{pokemon?.id}</Typography>
        </TableCell>
        <TableCell>
          <img src={"assets/pokemons/" + id + ".png"} alt="" />
        </TableCell>
        <TableCell>
          <Typography variant="body1">{pokemon?.names[3].name}</Typography>
        </TableCell>
        <TableCell>
          {pokemonIds.some((hid) => +hid === +id) ? (
            <Typography
              variant="body1"
              style={{ color: "#6ABD67", fontWeight: "bold" }}
            >
              有了
            </Typography>
          ) : (
            <Typography
              variant="body1"
              style={{ color: "#C52F00", fontWeight: "bold" }}
            >
              沒有
            </Typography>
          )}
        </TableCell>
      </TableRow>
    </>
  );
};

export default Pokemon;
