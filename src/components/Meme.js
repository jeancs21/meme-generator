import React from 'react';
//import memesData from '../memesData.js'

const Meme = () => {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });
    
    //second state to get all the memes from memesData
    const [allMemeImages, setMemeImage] = React.useState([])
    
    function getMemeUrl() {
        //const memesArray = allMemeImages.data.memes
        
        //random number based on the length of the memes array.
        const randomNumber = Math.floor(Math.random() * allMemeImages.length)
        
        //getting the url property of a random item of the meme array.
        const url = allMemeImages[randomNumber].url
                
        //updating the meme object (state) to display the new random image
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImage: url,
                topText: "",
                bottomText: ""
            }
        })
    }

    function handleChange(event) {
        const {name} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: event.target.value
        }))
    }

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setMemeImage(data.data.memes))
    }, [])

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
export default Meme