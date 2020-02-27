import React, { useState, useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { RenterContext } from "../../Context/RenterContext";

const UserForm = () => {
  const { owner, setOwner } = useContext(UserContext);
  

  const [addUser, setAddUser] = useState({
    Email: "",
    Password: "",
    FirstName: "",
    LastName: "",
    Location: "",
    Phone: "",
    // Image: ""
  });

  const handleChange=event=>{
      event.preventDefault();
      setAddUser({...addUser, [e.target.name]:e.target.value})
  }

  const handleSubmit =event=>{
      event.preventDefault();
      //post end point 

      setOwner(res.data)
  }

  return (
      <form onSubmit ={handleSubmit}>
          <input 
          type="text"
          name="Email"
          placeholder="Email"
        //   value{setAddUser.Email}
         onChange={handleChange}
         />
         <input 
          type="Password"
          name="Password"
          placeholder="Password"
        //   value{setAddUser.Password}
         onChange={handleChange}
         />
         <input 
          type="text"
          name="Email"
          placeholder="Email"
        //   value{setAddUser.Email}
         onChange={handleChange}
         />
         <input 
          type="text"
          name="FirstName"
          placeholder="FirstName"
        //   value{setAddUser.FirstName}
         onChange={handleChange}
         />
         <input 
          type="text"
          name="LastName"
          placeholder="LastName"
        //   value{setAddUser.LastName}
         onChange={handleChange}
         />
         <input 
          type="text"
          name="Location"
          placeholder="Location"
        //   value{setAddUser.Location}
         onChange={handleChange}
         />
         <input 
          type="number"
          name="Phone"
          placeholder="Phone"
        //   value{setAddUser.Phone}
         onChange={handleChange}
         />
        <button onClick={handleSubmit}>Submit</button>
      </form>
  )
};

export default Userform;
