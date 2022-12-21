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

    //! post
    const postAddTutorial =async (tutorial) => {
        await axios.post(url,tutorial);
        getTutorials()
    }

    //! delete
    const deleteTutorial =async (id) => {
        await axios.delete(`${url}/${id}`)
        getTutorials()
    }

     //! Update (PUT:Whole Update,PATCH :Partially Update)
    const editTutorial =async (id,title,desc) => {
        await axios.put(`${url}/${id}`,{title, description:desc})
    }
    console.log(tutorials)

    return (
        <div>
            <AddTutorial postAddTutorial={postAddTutorial}/>
            <TutorialList 
            tutorials={tutorials} 
            deleteTutorial={deleteTutorial} 
            editTutorial={editTutorial}/>
        </div>
    )
}

export default Home