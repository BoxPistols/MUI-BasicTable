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

export interface TableProps {
  data: Data[];
  id: number;
  email: string;
  first_name: string;
}

// import json Table
export function JpTable({ data }: TableProps): JSX.Element {
  return (
    <>
      <TableContainer component={Paper}>
        <Table
          sx={{
            minWidth: 650,
            whiteSpace: "nowrap",
            maxWidth: 650,
            overflow: "auto"
            // display: "grid"
            // gridTemplateColumns: "1fr, auto"
          }}
          aria-label="simple table"
        >
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
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 }
                }}
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

export default function JpDemo() {
  return (
    <>
      <JpTable id={0} data={[]} email={""} first_name={""} />
    </>
  );
}
