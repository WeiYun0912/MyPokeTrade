import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";

import barginPokemons from "../source/barginPokemons.json";

const Bargain = () => {
  return (
    <>
      <Typography variant="h4" style={{ margin: "20px 0" }}>
        我的籌碼(寶可夢) 持續更新中....
      </Typography>
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
            {barginPokemons
              .sort((a, b) => a.id - b.id)
              .map((bargin) => (
                <TableRow key={bargin.id}>
                  <TableCell>
                    <Typography variant="body1">{bargin.id}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body1">
                      <img src={"assets/shiny/" + bargin.id + ".png"} alt="" />
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body1">{bargin.name}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body1">{bargin.comment}</Typography>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Bargain;
