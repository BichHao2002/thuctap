import React, { Fragment, useState } from 'react';
import { Button, Form, InputGroup, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CountryData } from '../dataCountry/CountryData';
// import Add from '../actions/'
import { Link,useNavigate } from 'react-router-dom';
import  '../style/style.css';


export default function Country(){
    let history = useNavigate();

    const handleEdit = (name, code, description) => {
        localStorage.setItem('Name',name);
        localStorage.setItem('Code',code);
        localStorage.setItem('Desc',description);
    }

    const handleDelete=(name) =>{
        var index = CountryData.map(function(e){
            return e.name
        }).indexOf(name);

        CountryData.splice(index,1);
        history("/Country");
    }

    const [search, setSearch] = useState("");

    console.log(search)

    return(
    <Fragment>
        <div className='header'>
            <h1>Danh sách Quốc gia</h1>
        </div>
        
        <Form>
            <InputGroup className='search' style={{width: "700px",float:"left"}}>
            <Form.Control  onChange={(e) => setSearch(e.target.value)} placeholder='Search...' />
            </InputGroup>
            
            <Link to="/create">
                <Button style={{background:"Maroon", border: "none", float:"right"}} className='create' size='lg'>Create</Button>
            </Link>

        </Form>

        
        <div  className='Count'>
        <Table striped bordered hover size='sm'>
        <thead>
            <tr>
              <th className='name'>Name</th>
              <th className='code'>Code</th>
              <th className='desc'>Description</th>
              <th className='actions'>Actions</th>
            
            </tr>
          </thead>
          <tbody>
            {
                CountryData && CountryData.length > 0
                ?
                CountryData.filter((item) => {
                    return search.toLowerCase() === ''
                    ? item
                    : item.name.toLowerCase().includes(search);
                })
                .map((item) =>{
                    return(
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.code}</td>
                            <td>{item.description}</td>
                            <td> 
                            {/* <Link to="/edit">
                                 
                                 <Button style={{background:"Teal", border: "none"}} onClick={() => handleEdit(item.name, item.code, item.description)} className='edit'>Edit </Button>
                            </Link> */}
                            <Link to="/edit">
                                <Button style={{background:"Teal", border: "none"}} onClick={() => handleEdit(item.name, item.code, item.description)} className='edit'>Edit </Button>
                            </Link>
                                &nbsp;&nbsp;&nbsp;
                                <Button style={{background:"Olive", border: "none"}} onClick={() => {handleDelete(item.className)}} className='delete'>Delete </Button>
                               
                            </td>
                        </tr>
                    )
                })
                : 
                " No data avirable"
            }
            
        </tbody>
       </Table>
          
        
        </div>
    </Fragment>
)
}
