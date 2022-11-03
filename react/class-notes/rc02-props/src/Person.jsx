import Msg from "./Msg"

//! yukarıdan gelen props array olduğu için burada açarız(destructring)
//! map ile her bir dictionary item olark aldık içindeki key value için item destructiring yaptık
const Person = ({props}) => {
   
  return (
    <div>
        {props?.map((item,key)=>{
        console.log(props)
        console.log(item)
        const {img,tel,name}=item
        return(
            <div>
                <Msg key={key} name={name} />
                <p>{tel}</p>
                <img src={img} alt="" />
                
                <hr />
             </div>
        )
        })}
    </div>
  )
}

export default Person