import TutorialList from "../components/TutorialList"
import axios from "axios"
import { useEffect, useState } from "react"
// import { toastSuccessNotify } from "../helpers/ToastNotify"
import AddTutorial from "../components/AddTutorial"

const Home = () => {
    const [tutorials, setTutorials] = useState()
    const url = "https://63a16242a543280f7754aaa3.mockapi.io/tutorials";


    const getTutorials = async () => {
        try {
            const {data} = await axios.get(url)
            setTutorials(data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getTutorials()
        // toastSuccessNotify("veri çekildi")
    },[])
    console.log(tutorials)

    return (
        <div>
            <AddTutorial/>
            <TutorialList tutorials={tutorials}/>
        </div>
    )
}

export default Home