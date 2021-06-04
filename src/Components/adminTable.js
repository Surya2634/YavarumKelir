import React,{useState, useEffect} from 'react';
import {Table} from 'react-bootstrap';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import DeleteIcon from '@material-ui/icons/Delete';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import firebase from './firebase.config';

const AdminTable = ()=>{
    const [yavarum, setvalue] = useState();

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

const valueGetter = params => {
    return params.data.registernumber;
    console.log(params.data.name);
};

const valueSetter = params => {
    params.data.registernumber = params.newValue;
    console.log(params.data.registernumber);  
    return true;

};

return (
    <div className="ag-theme-alpine" style={{height:1000, width: 1520}}>
        <AgGridReact rowData={yavarum}>
            <AgGridColumn field="registernumber"  editable={true} resizable={true} sortable={ true } filter={ true }></AgGridColumn>
            <AgGridColumn field="Name"  editable={true} resizable={true} sortable={ true } filter={ true }></AgGridColumn>
            <AgGridColumn field="coursename"  editable={true} resizable={true} sortable={ true } filter={ true }></AgGridColumn>
            <AgGridColumn field="m1"  editable={true} resizable={true} sortable={ true } filter={ true }></AgGridColumn>
            <AgGridColumn field="m2"  editable={true} resizable={true} sortable={ true } filter={ true }></AgGridColumn>
            <AgGridColumn field="m3"  editable={true} resizable={true} sortable={ true } filter={ true }></AgGridColumn>
            <AgGridColumn field="total"  editable={true} resizable={true} sortable={ true } filter={ true }></AgGridColumn>
            <AgGridColumn field="result"  editable={true} resizable={true} sortable={ true } filter={ true }></AgGridColumn>
        </AgGridReact>
    </div>
)
}

export default AdminTable;
