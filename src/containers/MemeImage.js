import React from 'react';

const MemeImage = ({meme, handleChange, getMemeUrl}) => {
    return (
        <div className='meme-block'>
            <div className="inputs-block">
                <input
                    type='text'
                    className='txtBox'
                    placeholder="Top text"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input
                    type='text'
                    className='txtBox'
                    placeholder="Bottom text"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
            </div>
            <button onClick={getMemeUrl}>Get a new image</button>
            <div className='meme'>
                <img className="meme--image" src={meme.randomImage} alt='meme' />
                <h2 className='meme--text top'>{meme.topText}</h2>
                <h2 className='meme--text bottom'>{meme.bottomText}</h2>
            </div>
        </div>
    )
}
export default MemeImage