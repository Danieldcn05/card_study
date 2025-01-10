import React, { useState } from 'react';
import Card from '../Card/Card';
import './CardDisplay.css';

const CardDisplay = () => {
    const [collection, setCollection] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            const content = JSON.parse(e.target.result);
            setCollection(content);
        };
        reader.readAsText(file);
    };

    return (
        <>
            <h1>Prueba Cartas</h1>
            <input type="file" accept=".json" onChange={handleFileChange} />
            {collection && (
                <div className='card-display'>
                    {collection.cards.map((card, index) => (
                        <Card 
                            key={index} 
                            title={collection.title} 
                            question={card.question} 
                            answer={card.answer} 
                            bg_color1={collection.bg_color1}
                            bg_color2={collection.bg_color2}
                        />
                    ))}
                </div>
            )}
            <br/>
        </>
    );
};

export default CardDisplay;