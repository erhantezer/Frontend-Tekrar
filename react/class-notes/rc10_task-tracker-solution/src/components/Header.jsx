import { useState } from "react"
import AddTaskForm from "./AddTaskForm"


const Header = ({ tasks, setTasks }) => {
    const [btnStyle, setBtnStyle] = useState({
        name: 'SHOW ADD TASK BAR',
        bgColor: 'purple',
    })
    const [show, setShow] = useState(false)
    //! başlangıç false olmalıkı ki bir defa tıklayalım

    //! React, default olarak state'leri hemen degistirmeyebilir.
    //! Ekstra render'lari azaltmak icin state'leri toplu (batch) bir sekilde gunceller.
    //! Bir event handler icerisindeki ardasik state'ler event bitiminde toplu bir
    //! sekilde guncellenmis olur.State'lerin guncelenmesi gelis sirasina gorere yapilir.
    //! Ayni event icerisinde birbirine bagli state'leri kullanirken buna dikkat etmek gerkir.

    //? https://stackoverflow.com/questions/48563650/does-react-keep-the-order-for-state-updates


    //* başlangıçta false olan değer tıklanınca handle click fonksiyonunu toplu şekilde değiştrir
    //* önce else çalışır setshow trular ardından tekrar tıklanınca show değeri true olduğu için
    //* if çalışır show değeri false lanır
    const handleClick = () => {
        if (show) {
            setBtnStyle({ name: 'SHOW ADD TASK BAR', bgColor: 'purple' })
        } else {
            setBtnStyle({ name: 'CLOSE ADD TASK BAR', bgColor: 'red', })
        }
        setShow(!show)
    }

    return (
        <header>
            <h1 className="text-blue-500 font-semibold">TASK TRACKER</h1>
            <button
                className="btn text-white p-3 m-4 rounded-full"
                onClick={handleClick}
                style={{ backgroundColor: btnStyle.bgColor }}
            >
                {btnStyle.name}
            </button>
            {show && <AddTaskForm tasks={tasks} setTasks={setTasks}/>}
            
        </header>
    )
}

export default Header