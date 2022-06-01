import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// Add data
// FIXME!: tsconfig
import Data from "./data.json"; // 追加
const Datas = Data.data;

// 元の関数
/*function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}
// 元のデータ配列
const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];
*/
// Add CRow ----->
interface CRow {
  id: number;
  cdata: string;
  group: string;
}
export interface TableProps {
  // crows: CRow[];
  id: number;
  // data: string;
  // group: string;
  // json
  data: Data[];
  email: string;
  first_name: string;
}

const crows: CRow[] = [
  { id: 0, cdata: "foo", group: "group-a" },
  { id: 1, cdata: "bar", group: "group-b" },
  { id: 2, cdata: "baz", group: "group-c" }
];
// Add CRow <-----

// import json Table
export function AddTable({ data }: TableProps): JSX.Element {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell component="th" scope="row">
                ID
              </TableCell>
              <TableCell component="th" scope="row">
                名前の表示
              </TableCell>
              <TableCell component="th" scope="row">
                メールの表示
              </TableCell>
              <TableCell component="th" scope="row">
                メールの表示をしますのですがあああ
              </TableCell>
              <TableCell component="th" scope="row">
                住所の表示をしてみます
              </TableCell>
              <TableCell component="th" scope="row">
                住所の表示をしてみます
              </TableCell>
            </TableRow>
          </TableHead>
          {/* <tbody> */}
          <TableBody>
            {Datas.map((data) => (
              <TableRow
                key={data.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="td">{data.id}</TableCell>
                <TableCell component="td">{data.first_name}</TableCell>
                <TableCell component="td">{data.email}</TableCell>
                <TableCell component="td">{data.email}</TableCell>
                <TableCell component="td">{data.address}</TableCell>
                <TableCell component="td">{data.address}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {/* </tbody> */}
      </TableContainer>
    </>
  );
}

export default function CustomDemo() {
  return (
    <>
      <AddTable id={0} data={[]} email={""} first_name={""} />
      {/* json to table */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {/* <TableCell>Dessert (100g serving)</TableCell> */}
              <TableCell>ID</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>group</TableCell>
              {/* <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {crows.map((crow) => (
              <TableRow
                // key={row.name}
                key={crow.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="td" scope="row">
                  {crow.id}
                </TableCell>
                <TableCell component="td" scope="row">
                  {crow.cdata}
                </TableCell>
                <TableCell component="td" scope="row">
                  {crow.group}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* json default map */}
    </>
  );
}
