import React from 'react';
import Card from './Card';
import type { CardProps } from './Card'
interface CardGridProps {
    cards: CardProps[]
}

function CardGrid(props: CardGridProps) {
  let Cards = null;
  if (props.cards) {
  Cards = props.cards.map((postObj) => (
    <Card title = {postObj.title} 
          date = {postObj.date}
          content = {postObj.content} 
          id = {postObj.id}
          author = {postObj.author}
    /> 
  ));
}
  return (
  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 
                  gap-4">
    {Cards}
  </div>
    
  )
}

export default CardGrid