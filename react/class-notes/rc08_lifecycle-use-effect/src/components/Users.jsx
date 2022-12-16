import { useEffect, useState } from "react";


const Users = () => {
    const [users, setUsers] = useState([]);

    const getUsers = async() => {
        const url = "https://jsonplaceholder.typicode.com/users"
        try {
            const res = await fetch(url);
            if (!res.ok) {
                throw new Error(`Something went wrong:${res.status}`);
            }
            const data = await res.json()
            setUsers(data)
            console.log(data)
        } catch (error) {
            console.log(error);
        }

    // fetch("https://jsonplaceholder.typicode.com/users")
    // .then((res) => res.json())
    // .then((data) => setUsers(data))
    }

    useEffect(() => {
        //?componentDidMount
        getUsers()
    },[])

    console.log(users);
    return (
        <div>
        <h1>USER LIST</h1>
            <div className="row">
                {users.map((user) => {
                const {id, name,email} =user
                    return (
                        <div key={id} className="col bg-danger mb-4 text-white">
                            <img className="rounded-pill" src={`https://i.pravatar.cc/300?img=${id}`} alt="img" />
                            <h6 className="mt-2">{name}</h6>
                            <h6>{email}</h6>
                        </div>
                    )
                    
                })}
            </div>
        </div>
    )
}

export default Users