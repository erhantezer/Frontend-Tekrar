import { useUserContext } from "../context/UserContextProvider"


const User = () => {
    const {users, changeWidth} = useUserContext();

  return (
    <>
        {users?.map((user) => {
            const { id, login, avatar_url, width } = user;
            return (
                <div key={id}>
                    <h3>{login}</h3>
                    <img src={avatar_url} alt={login} width={width}/>
                    <div>
                        <label htmlFor="width">Image width(px) </label>
                        <input
                        id="width"
                        type="number"
                        value={width}
                        onChange={(e) => changeWidth(id, e.target.value)}
                        />
                    </div>
                </div>
            )
        })}
    </>
  )
}

export default User