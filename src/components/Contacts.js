import React, { useState } from 'react';
import styled from 'styled-components';

const Contacts = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    num: '',
    password: ''
  });

  const [show, setShow]=useState(false)

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
    console.log({user})
  };
const Details=()=>{
  return (
    <Container2>
    <div>
      <h1>DETAILS:</h1>
      <p>Name: {user.name}</p> 
      <p>Email: {user.email}</p> 
      <p>Phone Number: {user.num}</p> 
      <p>Password: {user.password}</p>
    </div>
    </Container2>)
}
  return (
    <>
    <Container>
      <Box>
      <form className="signup-form">
      <h1>SIGN-UP FORM</h1>
      <h6>ENTER YOUR DETAILS BELOW:</h6>
        <Name>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleInputs}
          placeholder="Name"
        />
        </Name>
        <Email>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleInputs}
          placeholder="Email"
        />
        </Email>
        <PhoneNumber>
        <input
          type="tel"
          name="num"
          value={user.num}
          onChange={handleInputs}
          placeholder="Phone Number"
        />
        </PhoneNumber>
        <Password>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleInputs}
          placeholder="Password"
        />
        </Password>
        <Button>
        <button onClick = {(e) => {e.preventDefault();setShow(true)}}>Submit</button>
        </Button>
      </form>
      </Box>
    </Container>
    {show && <Details/> }
      
  
    </>
  );
 
};

export default Contacts;

const Box=styled.div`
  min-height: 200px;
  width: 400px;
  display: flex;
  align-items: center;
  position: relative;
  box-sizing: border-box;
  border: solid;
  border-block-color: blue;
  border-block-end-width: revert-layer;
  border-block-start-color: blue;
  border-block-start-width: revert-layer;
  padding-block: 10px;
  padding-bottom: 30px;
  padding-inline: 2px;
  margin-top: -20vh;
  scroll-padding-inline-start: 85px;
  background: #be4d4d70

`

const Container = styled.div`
  min-height: 660px;
  display: flex;
  align-items: center;
  padding-left: 500px;
  position: relative;

`
const Name = styled.div`
    width: 171px;
    height: 55px;
    border: 1px #3d1c1c;
    align-items: center;
    justify-content: space-between;
    padding: 100 200px;
    position: variable;
    box-size: border-box;
    display: flex;
    font-size: x-large;
    padding-right: -22px;
    padding-inline: 73px;
    font-palette: dark;
    font-weight: bold;
    margin-top: 7px;
    margin-right: 28px;
    margin-bottom: 15px;
    margin-left: 32px;
    box-sizing: initial;
    border-block-width: 22px;
    border-radius: 23px;
    background-color: lightyellow;
    border-color: darkgoldenrod;
    flex-basis: fit-content;
}
  
`

const Email = styled.div`
  width: 171px;
  height: 55px;
  border: 1px #3d1c1c;
  align-items: center;
  justify-content: space-between;
  padding: 100 200px;
  position: variable;
  box-size: border-box;
  display: flex;
  font-size: x-large;
  padding-right: -22px;
  padding-inline: 73px;
  font-palette: dark;
  font-weight: bold;
  margin-top: 7px;
  margin-right: 28px;
  margin-bottom: 15px;
  margin-left: 32px;
  box-sizing: initial;
  border-block-width: 22px;
  border-radius: 23px;
  background-color: lightyellow;
  border-color: darkgoldenrod;
  flex-basis: fit-content;
  text-align: center; 
`
const PhoneNumber = styled.div`
  width: 171px;
  height: 55px;
  border: 1px #3d1c1c;
  align-items: center;
  justify-content: space-between;
  padding: 100 200px;
  position: variable;
  box-size: border-box;
  display: flex;
  font-size: x-large;
  padding-right: -22px;
  padding-inline: 73px;
  font-palette: dark;
  font-weight: bold;
  margin-top: 7px;
  margin-right: 28px;
  margin-bottom: 15px;
  margin-left: 32px;
  box-sizing: initial;
  border-block-width: 22px;
  border-radius: 23px;
  background-color: lightyellow;
  border-color: darkgoldenrod;
  flex-basis: fit-content;
  text-align: center; 

`

const Password = styled.div`
   width: 171px;
  height: 55px;
  border: 1px #3d1c1c;
  align-items: center;
  justify-content: space-between;
  padding: 100 200px;
  position: variable;
  box-size: border-box;
  display: flex;
  font-size: x-large;
  padding-right: -22px;
  padding-inline: 73px;
  font-palette: dark;
  font-weight: bold;
  margin-top: 7px;
  margin-right: 28px;
  margin-bottom: -11px;
  margin-left: 32px;
  box-sizing: initial;
  border-block-width: 22px;
  border-radius: 23px;
  background-color: lightyellow;
  border-color: darkgoldenrod;
  flex-basis: fit-content;
  text-align: center; 
  `
  const Button = styled.div`
  width: 209px;
  height: 30px;
  border: coral;
  background-color: #ba4949;
  color: white;
  font-size: x-large;
  font-weight: bold;
  margin-top: 25px;
  margin-right: 7px;
  margin-bottom: -15px;
  margin-left: 81px;
  box-sizing: initial;
  border-radius: 23px;
  flex-basis: fit-content;
  text-align: center; 

`
const Container2=styled.div`
  padding-top: 10px;
  height: 10vh;
  width:62vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 220px;
  left: 614px;
  right: 0px;
  box-sizing: border-box;
  border: solid;
  border-block-color: black;
  border-block-end-width: revert-layer;
  border-block-start-color: black;
  border-block-start-width: revert-layer;
  padding-block: 15px;
  padding-bottom: 111px;
  padding-inline: -12px;
  margin-left: 500px;
  margin-top: -131px;

`
;
