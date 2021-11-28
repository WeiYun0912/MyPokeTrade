import React, { useEffect, useState } from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { Typography } from "@material-ui/core";

const iHave = [
  1, 2, 3, 25, 26, 41, 42, 74, 75, 76, 129, 130, 132, 147, 148, 149, 152, 153,
  154, 158, 159, 160, 169, 196, 197, 198, 241, 246, 247, 248, 252, 253, 254,
  258, 259, 260, 280, 281, 282, 315, 371, 372, 373, 390, 391, 392, 393, 394,
  395, 403, 404, 405, 406, 407, 425, 426, 427, 428, 430, 442, 443, 444, 445,
  447, 448, 466, 468, 475,
];

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
          {iHave.some((hid) => +hid === +id) ? (
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
