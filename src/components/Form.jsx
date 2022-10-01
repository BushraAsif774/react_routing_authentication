

const Form =(props)=>{

    return(
        <div>
            <form action="">
                <input type="text" value={props.input} placeholder="Add Todo" onChange={(e)=>{props.setInput(e.target.value)}} />
                <br />
                <button onClick={()=>{props.onAdd(props.input)}}>Add</button>
            </form>
        </div>
    )
}
export default Form;