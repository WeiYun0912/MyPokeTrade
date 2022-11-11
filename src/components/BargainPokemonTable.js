import React, { useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";

import barginPokemons from "../source/newBarginPokemons.json";
import { Box, Divider } from "@material-ui/core";

const BargainPokemonTable = () => {
  const [pokemons, setPokemon] = useState([]);
  const searchPokemonFromBargin = (e) => {
    if (!isNaN(+e.target.value)) {
      const searchByNumber = barginPokemons.filter(
        (bargin) => bargin.id === +e.target.value
      );

      setPokemon(searchByNumber);
    } else {
      const searchByName = barginPokemons.filter(
        (bargin) => !bargin.name.indexOf(e.target.value)
      );
      setPokemon(searchByName);
    }
  };

  return (
    <>
      <Typography variant="h4" style={{ margin: "20px 0" }}>
        我的籌碼(寶可夢) 持續更新中....
      </Typography>
      <Divider />
      <Box sx={{ margin: "10px 0" }}>
        <input
          type="text"
          style={{ fontSize: "18px", textIndent: "10px", height: "50px" }}
          maxLength="10"
          placeholder="請輸入寶可夢名稱或編號"
          onChange={searchPokemonFromBargin}
        />
      </Box>
      <TableContainer style={{ margin: "20px 0 ", maxHeight: "750px" }}>
        <Table stickyHeader size="small" aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell style={{ minWidth: "50px" }}>
                <Typography variant="h6">No.</Typography>
              </TableCell>
              <TableCell style={{ minWidth: "50px" }}>
                <Typography variant="h6">圖片</Typography>
              </TableCell>
              <TableCell style={{ minWidth: "100px" }}>
                <Typography variant="h6">名稱</Typography>
              </TableCell>
              <TableCell style={{ minWidth: "50px" }}>
                <Typography variant="h6">備註</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pokemons == "" ? (
              <>
                {barginPokemons
                  .sort((a, b) => a.id - b.id)
                  .map((bargin) => (
                    <TableRow key={bargin.id}>
                      <TableCell>
                        <Typography variant="body1">{bargin.id}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body1">
                          <img
                            src={"assets/shiny/" + bargin.id + ".png"}
                            alt=""
                          />
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body1">{bargin.name}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body1">
                          {bargin.comment}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ))}
              </>
            ) : (
              <>
                {pokemons?.map((pokemon) => (
                  <TableRow key={pokemon.id}>
                    <TableCell>
                      <Typography variant="body1">{pokemon.id}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body1">
                        <img
                          src={"assets/shiny/" + pokemon.id + ".png"}
                          alt=""
                        />
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body1">{pokemon.name}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body1">{pokemon.comment}</Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default BargainPokemonTable;
