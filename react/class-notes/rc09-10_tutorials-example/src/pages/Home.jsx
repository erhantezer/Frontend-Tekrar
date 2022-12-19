import { useEffect, useState } from "react"
import axios from "axios";

const Home = () => {
    const [tutorials, setTutorials] = useState();

    const url = 'https://639f7c797aaf11ceb89ba52c.mockapi.io/tutorials';
    //! get (read)
    const getTutorials = async () => {
        try {
            const {data} = await axios.get(url);
            setTutorials(data) 
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getTutorials()
    },[])

    console.log(tutorials);
    return (
        <div>
        
        </div>
    )
}

export default Home