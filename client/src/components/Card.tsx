import React from 'react'
import { Link } from 'react-router-dom'

export interface CardProps {
  id: string;
  title: string;
  date: string;
  content: string;
  author: string;
}

function Card(props: CardProps) {
  return (
    <Link to="/about" id={props.id} className= "p-4 border rounded-xl bg-highlight hover:-translate-1"> 
      <h3>{props.title}</h3>
      <time>{props.date}</time>
      <div>
        <span>{props.content}</span>
      </div>
    </Link>

  )
}

export default Card;