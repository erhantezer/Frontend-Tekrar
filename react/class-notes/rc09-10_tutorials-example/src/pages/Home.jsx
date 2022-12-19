import { useEffect, useState } from "react"
import axios from "axios";
import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";

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
            <AddTutorial/>
            <TutorialList/>
        </div>
    )
}

export default Home