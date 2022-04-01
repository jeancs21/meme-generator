import React from 'react';
import memesData from '../memesData.js'

const Meme = () => {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/styles/bi_1860/public/media/image/2018/03/economia-meme.jpeg?itok=unXczJ6d"
    });
    
    //second state to get all the memes from memesData
    const [allMemeImages, setMemeImage] = React.useState(memesData)
    
    function getMemeUrl() {
        const memesArray = allMemeImages.data.memes
        
        //random number based on the length of the memes array.
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        
        //getting the url property of a random item of the meme array.
        const url = memesArray[randomNumber].url
                
        //updating the meme object (state) to display the new random image
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImage: url
            }
        })
    }
    return (
        <div className='meme-block'>
            <div className="inputs-block">
                <input type='text' className='txtBox' />
                <input type='text' className='txtBox' />
            </div>
            <button onClick={getMemeUrl}>Get a new image</button>
            <img className="meme--image" src={meme.randomImage} alt='meme' />
        </div>
    )
}
export default Meme