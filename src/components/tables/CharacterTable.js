import {
  Avatar,
  Box,
  IconButton,
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

import { useTheme } from "@mui/material/styles";

import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";

import React from "react";
import { useSelector } from "react-redux";

const TablePaginationActions = props => {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = event => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = event => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = event => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = event => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: { xs: 0, sm: 1, md: 1.5 } }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
};

const CharacterTable = props => {
  const {
    characters,
    onShowDetail,
    rowsPerPage,
    count,
    onChangeCharRowsNumber,
    onChangePage,
  } = props;

  const page = useSelector(state => state.characters.page);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 250 }} aria-label="characters table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ minWidth: 10 }}></TableCell>
            <TableCell sx={{ minWidth: 10 }}>Name</TableCell>
            <TableCell sx={{ minWidth: 10 }}>Species</TableCell>
            <TableCell sx={{ minWidth: 10 }}>Location</TableCell>
            <TableCell sx={{ minWidth: 10 }}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {characters.map(character => (
            <TableRow
              onClick={event => onShowDetail(character.id)}
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
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              colSpan={6}
              count={count}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  "aria-label": "rows per page",
                },
                native: true,
              }}
              onPageChange={onChangePage}
              onRowsPerPageChange={onChangeCharRowsNumber}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

export default CharacterTable;
