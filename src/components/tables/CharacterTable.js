import {
  Avatar,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";

import React from "react";

const CharacterTable = props => {
  const characterList = [...props.characters];

  const handleChangePage = () => {};
  const handleChangeRowsPerPage = () => {};
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 320 }} aria-label="characters table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Species</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {characterList.map(character => (
            <TableRow
              key={character.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Avatar alt={character.name} src={character.image} />
              </TableCell>
              <TableCell>{character.name}</TableCell>
              <TableCell>{character.species}</TableCell>
              <TableCell>{character.location.name}</TableCell>
              <TableCell>{character.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter></TableFooter>
      </Table>
    </TableContainer>
  );
};

export default CharacterTable;
