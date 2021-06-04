import React,{useState, useEffect} from 'react';
import {Table} from 'react-bootstrap';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import DeleteIcon from '@material-ui/icons/Delete';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import firebase from './firebase.config';

const GowriTable = ()=>{
    const [yavarum, setvalue] = useState([]);

    const ref = firebase.firestore().collection("Yavarumkelir");
  
    function getdata(){
      ref.onSnapshot((querySnapshot) =>{
          const items  = [];
          querySnapshot.forEach((docs)=>{
              items.push(docs.data());
              setvalue(items);
          });  
      }) 
  }
  
  useEffect(()=>{
      getdata();
  }, []);
  
  return (
    <div className="ag-theme-alpine" style={{height:1000, width: 1520}}>
        <AgGridReact rowData={yavarum}>
            <AgGridColumn field="registernumber" resizable={true} sortable={ true } filter={ true }></AgGridColumn>
            <AgGridColumn field="Name" resizable={true} sortable={ true } filter={ true }></AgGridColumn>
            <AgGridColumn field="coursename" resizable={true} sortable={ true } filter={ true }></AgGridColumn>
            <AgGridColumn field="m1" resizable={true} sortable={ true } filter={ true }></AgGridColumn>
            <AgGridColumn field="m2" resizable={true} sortable={ true } filter={ true }></AgGridColumn>
            <AgGridColumn field="m3" resizable={true} sortable={ true } filter={ true }></AgGridColumn>
            <AgGridColumn field="total" resizable={true} sortable={ true } filter={ true }></AgGridColumn>
            <AgGridColumn field="result" resizable={true} sortable={ true } filter={ true }></AgGridColumn>
        </AgGridReact>
    </div>
)   
}


export default GowriTable;