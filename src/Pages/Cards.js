import React,{useEffect,useState} from 'react';
import { useDispatch } from 'react-redux'
import './../Styles/Cards.css'
import Img from '../components/Img';
import Navbar from '../components/Navbar';
import {cardDeleted} from './../Store/actions'
function Cards(props) {
   // const count = useSelector(selectCards);
     //const [items,setItems] = useState([])
     const getLocalItmes=()=>{
        let list=localStorage.getItem('items')
       // console.log(list)
        if(list){
            return JSON.parse(localStorage.getItem('items'))
        }
        else{
          return []
        }
    }
     const [items,setItems] = useState(getLocalItmes().cards)
     /*useEffect(()=>{
        const data = JSON.parse(localStorage.getItem('items'))
        if(data.cards){
            setItems(data.cards)
        }
        //console.log(items)
     },[items])*/
     const dispatch = useDispatch()
     const handleDelete = (id)=>{
        //console.log(id);
        var newArr = items.filter(card => card.id !==id)
        setItems(newArr)
        dispatch(cardDeleted(newArr))
     }
     
     const handleEdit =(item)=>{
        //console.log(id);
        localStorage.setItem('editItemId', JSON.stringify(item));
     }

    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <div className="Cards">
            {items && items.map((item)=>{
                return  <div className="card" key={item.id}>
                <div className="card-body">
                <div className="nav-links">
                    <h4>{item.name}</h4>
                    <h6>
                        <code>
                        {item.bucketName}
                        </code>
                    </h6>
                </div>
                </div>
            <div className="card-media">
            <Img item={item}/>
            </div>
            <div className="nav-links">
            <button type="submit" onClick={()=>{handleDelete(item.id)}} className="btn btn-primary btn1">Delete</button>
            <button type="submit" onClick={()=>{handleEdit(item)}} className="btn btn-primary btn2"> <a href='/edit'> Edit </a> </button>
            </div>
            </div>
            })}
        </div>
        </div>
    );
}

export default Cards;