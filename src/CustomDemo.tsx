import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
// Add data
// FIXME!: tsconfig
import Data from './data.json' // 追加
const Datas = Data.data

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
  id: number
  data: string
  group: string
}
export interface TableProps {
  crows: CRow[]
  id: number
  data: string
  group: string
}

// import json Table
export function AddTable({ crows }: TableProps) {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>first_name</TableCell>
              <TableCell>email</TableCell>
            </TableRow>
          </TableHead>
        </Table>
        <TableBody>
          {Datas.map((user) => (
            <TableRow key={user.id}>
              <TableCell component="th" scope="row">
                {user.first_name}
              </TableCell>
              <TableCell component="th" scope="row">
                {user.email}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableContainer>
    </>
  )
}

const crows: CRow[] = [
  { id: 0, data: 'foo', group: 'group-a' },
  { id: 1, data: 'bar', group: 'group-b' },
  { id: 2, data: 'baz', group: 'group-c' },
]
// Add CRow <-----

export default function CustomDemo() {
  return (
    <>
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
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {crow.id}
                </TableCell>
                <TableCell component="th" scope="row">
                  {crow.data}
                </TableCell>
                <TableCell component="th" scope="row">
                  {crow.group}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* json default map */}
      <AddTable crows={[]} />
      {/* json to table */}
    </>
  )
}
