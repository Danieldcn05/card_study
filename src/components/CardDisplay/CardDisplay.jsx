import React, { useState } from 'react';
import Card from '../Card/Card';
import './CardDisplay.css';

const CardDisplay = () => {
    const [collection, setCollection] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const content = JSON.parse(e.target.result);
                if (content.title && content.bg_color1) {
                    setCollection(content);
                    setError(null);
                } else {
                    const errorMessage = 'El archivo JSON no es válido.';
                    alert(errorMessage);
                }
            } catch (error) {
                const errorMessage = 'Error al parsear el archivo JSON.';
                setError(errorMessage);
                alert(errorMessage);
            }
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
                            text_color={collection.text_color}
                            border_color={collection.border_color}
                            border_width={collection.border_width}
                            font_family={collection.font_family}
                        />
                    ))}
                </div>
            )}
        </>
    );
};

export default CardDisplay;