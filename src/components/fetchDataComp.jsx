import React, { useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap';

function FetchDataComp() {
  const [textInput, setTextInput] = useState('USERS');
  const [data, setData] = useState([]);
  const deleItem = (elementIdToDelete) => {
    setData(prev => prev.filter(item => item.id !== elementIdToDelete));
  }
  const listItems = data.map((item) =>
    <li key={item.id} onClick={() => { deleItem(item.id) }}>
      {/* {JSON.stringify(item)} */}
      {item.id}| {item.name} | {item.email} | {item.phone}
    </li>
  );
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        setData(json);
      })
  }, []);
  const addElem = () => {
    setData(prev => [{
      name: textInput,
      email: textInput,
      phone: textInput,
      id: prev.length + 1
    }, ...prev])
    setTextInput('');
  }
  const myChange = (e) => {
    console.log('......');
    setTextInput(e.target.value);
  }

  return (
    < div className="data-container">
      <h3>{textInput}</h3>
      <Form onChange={e => myChange(e)} >
        <Form.Group controlId="formBasicEmail" >
          <Form.Label>Email address</Form.Label>
          <Form.Control type="text" value={textInput} />
          <Form.Text
            className="text-muted"

          > всё что хочешь вводи</Form.Text>
        </Form.Group>
        <Button variant="primary" onClick={() => addElem()}>Submit</Button>
      </Form>
      <ul>{listItems}</ul>
    </div >
  )
}

export default FetchDataComp



