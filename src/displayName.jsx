import { useState } from "react";


export default function Display(){
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: ""
    });

    const [fullName, setFullName] = useState('')

    // Inside handleSubmit function
    const handleSubmit = (e) => {
        e.preventDefault();
            
        setFullName(`${formData.firstName} ${formData.lastName}`);
        setFormData({
            firstName: "",
            lastName: ""
        });
    };


    return(
        <>
        <h1>Full Name Display</h1>
        <div className="form">
            <form onSubmit={handleSubmit}>
                <label>First Name: </label>
                <input required 
                    type="text" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={(e)=>{
                        setFormData({
                            ...formData,
                            firstName: e.target.value
                        })
                    }}
                    />
                <br/>
                <br />
                <label>Last Name: </label>
                <input required
                    type="text" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={(e)=>{
                        setFormData({
                            ...formData,
                            lastName: e.target.value
                        })
                    }} />
                <br/>
                <br />
                <button type="submit">Submit</button>
                {fullName && <p>Full Name: {fullName}</p> }
            </form>
        </div>        
        </>

    )
}