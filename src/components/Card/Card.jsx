import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Card.css';
import line from './Line1.png';

const Card = ({ title, question, answer, bg_color1, bg_color2, text_color, border_color, border_width, font_family }) => {
    const [flipped, setFlipped] = useState(false);

    const handleClick = () => {
        setFlipped(!flipped);
    };

    return (
        <div className={`flip-card ${flipped ? 'flipped' : ''}`} onClick={handleClick}>
            <div className="flip-card-inner">
                <div className="flip-card-front" style={{ backgroundColor: bg_color1, color: text_color, borderColor: border_color, borderWidth: border_width, fontFamily: font_family }}>
                    <h2>{title}</h2>
                    <p>{question}</p>
                    <img src={line} alt="Line1" />
                </div>
                <div className="flip-card-back" style={{ backgroundColor: bg_color2, color: text_color, borderColor: border_color, borderWidth: border_width, fontFamily: font_family }}>
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
    text_color: PropTypes.string.isRequired,
    border_color: PropTypes.string.isRequired,
    border_width: PropTypes.number.isRequired,
    font_family: PropTypes.string.isRequired,
};

export default Card;