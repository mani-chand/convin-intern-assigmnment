import React,{useState} from 'react';
import Navbar from '../components/Navbar';
import './../Styles/Home.css'
import { useDispatch } from 'react-redux'
import {EditCard} from './../Store/actions'
function Edit(props) {
    const getLocalItmes=()=>{
        let list=localStorage.getItem('editItemId')
       // console.log(list)
        if(list){
            return JSON.parse(localStorage.getItem('editItemId'))
        }
        else{
          return []
        }
    }
     const dispatch = useDispatch()
     const [items,setItems] = useState(getLocalItmes())
     console.log(items)
     const handleEdit=(items)=>{
            
     }
    return (
        <div>
          <Navbar/>
        <div className='form'>
        <div className="column g-4 align-items-center">
  <div className="row-auto">
    <label htmlFor="Title" className="col-form-label">Title</label>
  </div>
  <div className="row-auto">
    <input 
    type="text" 
    id="Tittle" 
    value={items.name}
    name="name"
    className="form-control name" 
    aria-describedby="passwordHelpInline"
    onChange={(e)=>setItems({...items,[e.target.name]:e.target.value})}
    />
  </div>
  <div className="row-auto">
    <span id="Tittle" className="form-text">
    </span>
  </div>

  <div className="col-auto">
    <label htmlFor="Link" className="col-form-label">Link</label>
  </div>
  <div className="col-auto">
    <input 
    type="text" 
    id="Link" 
    name="url"
    value={items.url}
    onChange={(e)=>setItems({...items,[e.target.name]:e.target.value})}
    className="form-control link"
    aria-describedby="Link"/>
  </div>
  <div className="col-auto">
    <span id="Link" className="form-text">
    </span>
  </div>
  <div className="col-auto">
    <label htmlFor="BucketName" className="col-form-label BucketName">BucketName</label>
  </div>
  <div className="col-auto">
    <input 
    type="text" 
    id="BucketName" 
    name="bucketName"
    value={items.bucketName}
    className="form-control bucket-name" 
    aria-describedby="BucketName"
    onChange={(e)=>setItems({...items,[e.target.name]:e.target.value,date:Date()})}
 
    />
  </div>
  <div className="col-auto">
    <span id="BucketName" className="form-text">
    </span>
  </div>
  <button type="submit" onclick={handleEdit(items)} className="btn btn-primary btn1">Submit changes</button>
</div>
</div>
        </div>
    );
}

export default Edit;