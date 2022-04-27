import React from 'react';
import MemeImage from '../containers/MemeImage';
import MemeFetcher from './MemeFetcher';

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

    return (
        <>
            <MemeImage
                meme={meme}
                handleChange={handleChange}
                getMemeUrl={getMemeUrl}
            />
            <MemeFetcher
                setMemeImage={setMemeImage}
            />
        </>
    )
}
export default Meme