import React, { useState } from 'react';
import './DeckCreator.css';
import Card from '../Card/Card';

const DeckCreator = () => {

  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [cards, setCards] = useState([]);

  const [title, setTitle] = useState('Deck Title');
  const [frontColor, setFrontColor] = useState('');
  const [backColor, setBackColor] = useState('');
  const [textColor, setTextColor] = useState('');
  const [borderWidth, setBorderWidth] = useState('10');
  const [borderColor, setBorderColor] = useState('');
  const [fontFamily, setFontFamily] = useState('');


  const handleAddCard = () => {
    const newCard = { question, answer };
    setCards([...cards, newCard]);
    setQuestion('');
    setAnswer('');
  };

  const removeCard = (index) => {
    const newCards = cards.filter((_, i) => i !== index);
    setCards(newCards);
  }

  const saveDeck = () => {
    if (cards.length > 0) {
      const deck = {
        "title": title,
        "bg_color1": frontColor,
        "bg_color2": backColor,
        "text_color": textColor,
        "border_width": Number(borderWidth),
        "border_color": borderColor,
        "font_family": fontFamily,
        "cards": cards
      }
      const deckJson = JSON.stringify(deck, null, 2);
      const blob = new Blob([deckJson], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${title}.json`;
      a.click();
      URL.revokeObjectURL(url);
    } else {
      alert('Please add at least one card to save the deck');
    }
  }


  return (
    <div>

      <div id='bigCont'>


        <div id='deckCustom'>


          <h2>Deck Customization</h2>

          <div className='cont'>
            <h3>Deck Title</h3>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>

          <div className='cont'>
            <h3>Front Color</h3>
            <input type="color" value={frontColor} onChange={(e) => setFrontColor(e.target.value)} />

            <h3>Back Color</h3>
            <input type="color" value={backColor} onChange={(e) => setBackColor(e.target.value)} />
          </div>

          <div className='cont'>
            <h3>Text Color</h3>
            <input type="color" value={textColor} onChange={(e) => setTextColor(e.target.value)} />
          </div>

          <div className='cont'>
            <h3>Border Width</h3>
            <input type="number" value={borderWidth} onChange={(e) => setBorderWidth(e.target.value)} />

            <h3>Border Color</h3>
            <input type="color" value={borderColor} onChange={(e) => setBorderColor(e.target.value)} />
          </div>

          <div className='cont'>
            <h3>Font Family</h3>
            <select value={fontFamily} onChange={(e) => setFontFamily(e.target.value)}>
              <option value="Arial">Arial</option>
              <option value="Verdana">Verdana</option>
              <option value="Times New Roman">Times New Roman</option>
              <option value="Courier New">Courier New</option>
              <option value="Georgia">Georgia</option>
            </select>
          </div>




          <h2>Add Cards</h2>

          <div className='cont'>
            <h3>Question</h3>
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />

            <h3>Answer</h3>
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />

            <button onClick={handleAddCard}>Add</button>


          </div>

          <div>
            <ul className='card-list'>
              {cards.map((card, index) => (
                <li key={index} className='card' onClick={() => removeCard(index)}>
                  <strong>Question:</strong> {card.question} <br />
                  <strong>Answer:</strong> {card.answer}
                </li>
              ))}
            </ul>
          </div>



        </div>

        <div id='cardPreview'>

          <Card
            title={title}
            question={cards.length > 0 ? cards[0].question : "Question"}
            answer={cards.length > 0 ? cards[0].answer : "Answer"}
            bg_color1={frontColor}
            bg_color2={backColor}
            text_color={textColor}
            border_color={borderColor}
            border_width={Number(borderWidth)}
            font_family={fontFamily}
          />

          <button id='save-butt' onClick={() => saveDeck()}>Save Deck</button>
        </div>

      </div>

    </div>
  );
};

export default DeckCreator;