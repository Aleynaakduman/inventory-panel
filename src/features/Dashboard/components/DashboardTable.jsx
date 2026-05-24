import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableVirtuoso } from 'react-virtuoso';

import {useState, useEffect} from 'react'



const columns = [
  {
    width: 100,
    label: 'ID',
    dataKey: 'id',
  },
  {
    width: 100,
    label: 'Ürün',
    dataKey: 'name',
  },
  {
    width: 50,
    label: 'Kategori',
    dataKey: 'category',
    numeric: true,
  },
  {
    width: 110,
    label: 'Birim',
    dataKey: 'quantity',
  },
  {
    width: 130,
    label: 'Adet',
    dataKey: 'unit',
  },
   {
    width: 130,
    label: 'Durum',
    dataKey: 'status',
  }
];



const VirtuosoTableComponents = {
  Scroller: React.forwardRef((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} />
  )),
  Table: (props) => (
    <Table {...props} sx={{ borderCollapse: 'separate', tableLayout: 'fixed' }} />
  ),
  TableHead: React.forwardRef((props, ref) => <TableHead {...props} ref={ref} />),
  TableRow,
  TableBody: React.forwardRef((props, ref) => <TableBody {...props} ref={ref} />),
};

function fixedHeaderContent() {
  return (
    <TableRow>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          variant="head"
          align={column.numeric || false ? 'right' : 'left'}
          style={{ width: column.width }}
          sx={{ backgroundColor: 'background.paper' }}
        >
          {column.label}
        </TableCell>
      ))}
    </TableRow>
  );
}

function rowContent(_index, row) {
  return (
    <React.Fragment>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          align={column.numeric || false ? 'right' : 'left'}
        >
          {row[column.dataKey]}
        </TableCell>
      ))}
    </React.Fragment>
  );
}

export default function ReactVirtualizedTable() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3001/products')
    .then((ress) => ress.json())
    .then((data) => setProducts(data))
  } , [])

  return (
    <Paper style={{ height: 400, width: '100%' }}>
      <TableVirtuoso
        data={products}
        components={VirtuosoTableComponents}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={rowContent}
      />
    </Paper>
  );
}