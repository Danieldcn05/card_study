import React from 'react';
import Card from '../Card/Card';
import './CardDisplay.css';

const CardDisplay = ({collection}) => {
    

    return (
        <>
        <h1>Prueba Cartas</h1>
        <div className='card-display'>
            {collection.cards.map((card, index) => (
                <Card 
                    key={index} 
                    title={collection.title} 
                    question={card.question} 
                    answer={card.answer} 
                    bg_color={collection.bg_color}
                />
            ))}
        </div>
        <br/>
        </>
    );
};

export default CardDisplay;