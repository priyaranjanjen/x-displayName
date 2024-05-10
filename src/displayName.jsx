import { useState } from "react";


export default function Display(){
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: ""
    });

    const [fullName, setFullName] = useState('')
    const [click, setClick] = useState(false);

    // Function to validate input fields
    const isValidInput = (input) => {
        // Regular expression to allow only alphabets and spaces
        const regex = /^[a-zA-Z\s]*$/;
        return regex.test(input);
    };

    // Inside handleSubmit function
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isValidInput(formData.firstName) || !isValidInput(formData.lastName)) {
            alert("Please enter valid names without special characters or numbers.");
            return;
        }
        setClick(true);
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
            </form>
        </div>
        {
            click && (
                <div>
                    <p>Full Name: {fullName}</p>
                </div>
            )
        }          
        </>

    )
}