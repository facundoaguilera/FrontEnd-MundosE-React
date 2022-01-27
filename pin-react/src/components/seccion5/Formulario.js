import react,{useState} from "react";

function Formulario(params) {
    const [data, setData] = useState({"Name":"","Email":"","Phone":"","Message":"" })
    const handleInputChange = (event) => {
        
        setData({
            ...data, //esto realiza una copia de data
            [event.target.name]:event.target.value
        })
    }
    const sendData = (event) => { 
        event.preventDefault();
        console.log(data.Name+" "+data.Email+" "+data.Phone+ " "+data.Message)
    }
    return (
        <form onSubmit={sendData}>
            <input type="text" name="Name" id="nombre" placeholder="Name" onChange={handleInputChange}/>
            <input type="text" name="Email" id="Email" placeholder="Email" onChange={handleInputChange}/>
            <input type="number" name="Phone" id="Phone" placeholder="Phone" onChange={handleInputChange}/>
            <input type="text" name="Message" id="Message" placeholder="Message" onChange={handleInputChange}/>
            <div>
            <button class="ReadMore" type="submit"><p>
                          Send
                        </p>
            </button>
            </div>
        </form>
        
        
    )
    
}

export default Formulario;