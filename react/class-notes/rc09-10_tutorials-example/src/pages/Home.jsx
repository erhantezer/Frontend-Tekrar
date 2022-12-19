import { useEffect, useState } from "react"
import axios from "axios";
import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";

const Home = () => {
    const [tutorials, setTutorials] = useState();

    const url ='https://63a0ee4824d74f9fe8448ea6.mockapi.io/tutorials';
    //! get (read)
    const getTutorials = async () => {
        try {
            const {data} = await axios.get(url);
            setTutorials(data) 
            console.log(data)
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
            <TutorialList tutorials={tutorials}/>
        </div>
    )
}

export default Home