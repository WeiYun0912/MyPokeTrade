import React, { useEffect, useState } from "react";
import Pokemon from "./Pokemon";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import { pokemonIds } from "../source/pokemonIds";
import styled from "styled-components";

const Pokemons = () => {
  const [pokemons, setPokemons] = useState([]);
  const [searchPokemon, setSearchPokemon] = useState();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(
    "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=493"
  );
  const [tablePage, setTablePage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  useEffect(() => {
    const getPokemons = async () => {
      const response = await fetch(page);
      const data = await response.json();
      setPokemons(data.results);
    };

    getPokemons();
  }, [setPokemons, setPage, page]);

  useEffect(() => {
    const searchPokemon = async () => {
      if (search !== "") {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon-species/${search}/`
        );
        const data = await response.json();
        setSearchPokemon(data);
      }
    };

    searchPokemon();
  }, [search]);

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const RowsPokemon = () => {
    return pokemons.map((pokemon) => {
      let id = pokemon.url.split("/")[6];
      const existPokemon = pokemonIds.find((pid) => pid == id);

      if (!existPokemon) {
        return <Pokemon key={pokemon.name} id={id} />;
      }
    });
  };

  const PerPokemon = () => {
    return <Pokemon id={searchPokemon?.id} />;
  };

  return (
    <>
      <Divider light={true} />

      <ActionArea>
        <Box>
          <input
            type="text"
            style={{ fontSize: "18px", textIndent: "10px", height: "50px" }}
            maxLength="3"
            placeholder="請輸入寶可夢編號"
            onChange={searchHandler}
          />
        </Box>
      </ActionArea>
      <TableContainer style={{ maxHeight: "750px" }}>
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
              {/* <TableCell style={{ minWidth: "50px" }} >
                <Typography variant="h6">色違</Typography>
              </TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {search === "" ? <RowsPokemon /> : <PerPokemon />}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Pokemons;

const ActionArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;

  @media (max-width: 40rem) {
    flex-direction: column;
  }
`;
