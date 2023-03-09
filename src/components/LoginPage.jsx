import React, { useState} from "react"
import { useHistory} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function LoginPage() {
    // const[name, setName]= useState("")
    const[email, setEmail]=useState("")
    const[password, setPassword]=useState("")
    // const[kidId, setkidId]=useState("")

    let history = useHistory()

    function handleEmail(e){
        setEmail(e.target.value)
    }
    function handlePassword(e){
        setPassword(e.target.value)
    }

    let postedUserObj={
        email:email,
        password:password
    };

    function handleSubmit(e){
        e.preventDefault();
        fetch('http://localhost:3000/users')
        .then(response=>response.json())
        .then(data=>{
            data.map((d)=>{if(postedUserObj.email===d.email){history.push(`/${d.kidId}`)}}
            )
        })
    }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={((e)=>handleEmail(e))} value={email}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={((e)=>handlePassword(e))} value={password}/>
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default LoginPage