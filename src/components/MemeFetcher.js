import React from 'react';

const MemeFetcher = ({setMemeImage}) => {
    return (
        React.useEffect(() => {
            fetch("https://api.imgflip.com/get_memes")
                .then(res => res.json())
                .then(data => setMemeImage(data.data.memes))
        }, [])
    )
}
export default MemeFetcher