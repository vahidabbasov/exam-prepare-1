import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Index() {
  let [cards, setCards] = useState([])
  let {id} = useParams()
  useEffect(()=>{
    axios.get(`http://localhost:2002/api/workers/${id}`).then((res)=>setCards(res.data))
  },[])
  console.log(cards);
  return (
    <div>{cards.name}</div>
  )
}

export default Index