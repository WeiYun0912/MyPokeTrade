import React, { useEffect, useState } from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { Typography } from "@material-ui/core";

const iHave = [
  1, 2, 3, 4, 5, 6, 25, 26, 41, 42, 56, 57, 58, 59, 74, 75, 76, 77, 78, 92, 93,
  94, 102, 103, 129, 130, 131, 132, 133, 134, 135, 137, 144, 145, 146, 147, 148,
  149, 152, 153, 154, 155, 156, 157, 158, 159, 160, 166, 169, 170, 175, 176,
  179, 180, 181, 196, 197, 198, 200, 212, 241, 243, 244, 245, 246, 247, 248,
  249, 250, 252, 253, 254, 258, 259, 260, 280, 281, 282, 285, 286, 296, 297,
  315, 371, 372, 373, 374, 375, 376, 387, 388, 389, 390, 391, 392, 393, 394,
  395, 396, 397, 398, 401, 402, 403, 404, 405, 406, 407, 417, 422, 423, 425,
  426, 427, 428, 429, 430, 431, 432, 436, 437, 442, 443, 444, 445, 447, 448,
  466, 467, 468, 472, 475, 479, 481, 482, 483, 484, 487,
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
