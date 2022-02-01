import react,{useState} from "react";
import axios from 'axios';
import Button from "../Button";

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
        axios.post('https://pin.cardansel.com/laravel/public/api/comments', data)
        .then(response => {console.log(response);
        console.log(response.data);} )
    };
    
    return (
        <form className ="formulario" onSubmit={sendData}>
            <input type="text" name="Name" id="nombre" placeholder="Name" onChange={handleInputChange}/>
            <input type="text" name="Email" id="Email" placeholder="Email" onChange={handleInputChange}/>
            <input type="number" name="Phone" id="Phone" placeholder="Phone" onChange={handleInputChange}/>
            <input type="text" name="Message" id="Message" placeholder="Message" onChange={handleInputChange}/>
            <div>
            <Button className="ReadMore" type="submit">
            Send
            </Button>
            {/* <button className="ReadMore" type="submit"><p>
                          Send
                        </p>
            </button> */}
            </div>
        </form>
        
        
    )
    
}

export default Formulario;