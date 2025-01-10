import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Card.css';
import line from './Line1.png';

const Card = ({ title, question, answer, bg_color1, bg_color2 }) => {
    const [flipped, setFlipped] = useState(false);

    const handleClick = () => {
        setFlipped(!flipped);
    };

    return (
        <div className={`flip-card ${flipped ? 'flipped' : ''}`} onClick={handleClick}>
            <div className="flip-card-inner">
                <div className="flip-card-front" style={{ backgroundColor: bg_color1 }}>
                    <h2>{title}</h2>
                    <p>{question}</p>
                    <img src={line} alt="Line1" />
                </div>
                <div className="flip-card-back" style={{ backgroundColor: bg_color2 }}>
                    <p>{answer}</p>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    title: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
    bg_color1: PropTypes.string.isRequired,
    bg_color2: PropTypes.string.isRequired,
};

export default Card;