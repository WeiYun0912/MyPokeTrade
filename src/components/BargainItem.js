import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";

import barginItems from "../source/barginItems.json";

const BargainItem = () => {
  return (
    <>
      <Typography variant="h4" style={{ margin: "20px 0" }}>
        我的籌碼(道具)
      </Typography>
      <TableContainer style={{ margin: "20px 0 " }}>
        <Table stickyHeader size="small" aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="h6">圖片</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">名稱</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {barginItems
              .sort((a, b) => a.id - b.id)
              .map((bargin) => (
                <TableRow key={bargin.id}>
                  <TableCell>
                    <Typography variant="body1">
                      <img
                        src={"assets/items/" + bargin.id + ".png"}
                        style={{ width: "50px" }}
                        alt=""
                      />
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body1">{bargin.name}</Typography>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default BargainItem;
