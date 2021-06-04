import React,{useState, useEffect} from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import firebase from './firebase.config';


const GowriAdminTable = ()=>{
    const [yavarum, setvalue] = useState([]);

  const ref = firebase.firestore().collection("YavarumkelirAdmin");

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
    <div className="ag-theme-alpine mt-2 ml-2" style={{height:400, width: 400}}>
        <AgGridReact rowData={yavarum}>
            <AgGridColumn field="username" resizable={true} sortable={ true } filter={ true }></AgGridColumn>
            <AgGridColumn field="password" resizable={true} sortable={ true } filter={ true }></AgGridColumn>
        </AgGridReact>
    </div>
)
    

}


export default GowriAdminTable;