import React,{useState,useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux'
import './../Styles/Home.css'
import {cardAdded,selectCards} from './../Store/actions'
import { v4 as uuid } from 'uuid';
import Navbar from '../components/Navbar';
function Home(props) {
  const [card,setCard] = useState({
    name : "",
    url : "",
    bucketName:"",
    isImg : false
  })
  const dispatch = useDispatch()
  const count = useSelector(selectCards);
  const [cards,setCards] = useState([])
  useEffect(()=>{
    setCards(count)
    localStorage.setItem('items', JSON.stringify(cards));
},[cards,count])

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
    name="name"
    className="form-control name" 
    aria-describedby="passwordHelpInline"
    onChange={(e)=>setCard({...card,[e.target.name]:e.target.value})}/>
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
    className="form-control link"
    aria-describedby="Link"
    onChange={(e)=>{
      setCard({...card,[e.target.name]:e.target.value,isImg:(e.target.value).split().pop() === 'jpg'})
      }}/>
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
    className="form-control bucket-name" 
    aria-describedby="BucketName"
    onChange={(e)=>setCard({...card,[e.target.name]:e.target.value,date:Date(),id:uuid()})}
    />
  </div>
  <div className="col-auto">
    <span id="BucketName" className="form-text">
    </span>
  </div>
  <button onClick={()=> {dispatch(cardAdded(card))
   setCards({
    name : "",
    url : "",
    bucketName:"",
    isImg : false
  })
  }} type="submit" className="btn btn-primary btn1">Submit</button>
</div>
</div>
        </div>
    );
}

export default Home;