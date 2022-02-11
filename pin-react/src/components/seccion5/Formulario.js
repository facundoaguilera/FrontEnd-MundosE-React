import react,{useState} from "react";
import axios from 'axios';
import Button from "../Button";

function Formulario(params) {
    const [data, setData] = useState({"name":"","email":"","phone":"","message":"" })

    const handleInputChange = (event) => {
        setData({
            ...data, //esto realiza una copia de data
            [event.target.name]:event.target.value
        })
    }
    

    const sendData = (event) => { 
        event.preventDefault();
        console.log(data.name+" "+data.email+" "+data.phone+ " "+data.message)
        const Url="http://pin.cardansel.com/laravel/public/api/comments";
        const Url2="http://127.0.0.1:8000/api/comment";
        axios.post(Url2, data).then(response => {console.log(response);
        console.log(response.data);} )
    };
    
    return (
        <form className ="formulario" onSubmit={sendData}>
            <input type="text" name="name" id="nombre" placeholder="Name" onChange={handleInputChange}/>
            <input type="text" name="email" id="Email" placeholder="Email" onChange={handleInputChange}/>
            <input type="number" name="phone" id="Phone" placeholder="Phone" onChange={handleInputChange}/>
            <input type="text" name="message" id="Message" placeholder="Message" onChange={handleInputChange}/>
            <div>
            <Button className="ReadMore" type="submit">
            Send
            </Button>
            
            </div>
        </form>
        
        
    )
    
}

export default Formulario;