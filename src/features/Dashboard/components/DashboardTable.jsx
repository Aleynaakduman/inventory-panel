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
    width: 80,
    label: 'ID',
    dataKey: 'id',
  },
  {
    width: 220,
    label: 'Ürün',
    dataKey: 'name',
  },
  {
    width: 160,
    label: 'Kategori',
    dataKey: 'category' 
   },
  {
    width: 120,
    label: 'Birim',
    dataKey: 'quantity',
  },
  {
    width: 120,
    label: 'Adet',
    dataKey: 'unit',
  },
   {
    width: 140,
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


  const [selectedCategory, setSelectedCategory] = useState("Hepsi");
  const [selectedStatus, setSelectedStatus] = useState("Hepsi");
  const [searchTerm, setSearchTerm] = useState("");


  useEffect(() => {
    fetch('http://localhost:3001/products')
    .then((ress) => ress.json())
    .then((data) => setProducts(data))
  } , [])


  const filterProducts = products.filter((product) => {
    const categoryMatch =
      selectedCategory === "Hepsi" ||
      product.category === selectedCategory;

    const statusMatch = selectedStatus === "Hepsi" || product.status === selectedStatus;


    const searchMatch = product.name.toLowerCase().includes(searchTerm.toLowerCase());

    return categoryMatch && statusMatch && searchMatch;

  });



  return (
    <Paper style={{ height: 400, width: '100%' }}>
        <div className="search">

    


          <input type="text" placeholder='Ürün Adı Ara...' value={searchTerm}  onChange={(e) => setSearchTerm(e.target.value)}/>
   <div className="select-search">
      <select defaultValue = "Hepsi" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
      <option value="Hepsi">Tüm Kategoriler</option>
      <option value="Elektronik">Elektronik </option>
      <option value="Kırtasiye">Kırtasiye</option>
      <option value="Aksesuar">Aksesuar</option>
      <option value="Mobilya">Mobilya</option>
      <option value="Depolama">Depolama</option>

    </select>

      <select defaultValue="Hepsi" value={selectedStatus} onChange={(e) => setSelectedStatus(e.target.value)}>
        <option value="Hepsi">Tüm Durumlar</option>
        <option value="stokta">Stoktakiler</option>
        <option value="tükendi">Tükenenler</option>
        <option value="kritik">Kritikler</option>
      </select>
   </div>
        </div>
      
      <TableVirtuoso
        data={filterProducts}
        components={VirtuosoTableComponents}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={rowContent}
      />
    </Paper>
  );
}