import React, { useState, useEffect } from 'react'
import '../App.css'

function FetchComp() {
  const [fetcData, setFetchData] = useState([]);
  const [textInp, setTextInp] = useState('TODO');
  const parsedData = fetcData.map(({ title, id, userId }) =>
    <li key={id} onClick={() => delItem(id)}>{title} | {id} | {userId}</li>)
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.json())
      .then(json => {
        setFetchData(json);
      })
  }, []);
  const addString = () => {
    console.log('HA!!!!!!!!!!');
    setFetchData(prev => [{ title: textInp, id: prev.length + 1, userId: 33 }, ...prev])
    setTextInp('');
  }
  const delItem = (idToDelete) => {
    setFetchData(prev => prev.filter(({ id }) => id !== idToDelete))
  }
  return (
    <div className="data-container">
      <input type="text" onChange={e => setTextInp(e.target.value)} value={textInp} />
      <button onClick={() => addString()}>ADD</button>
      <h3>{textInp}</h3>
      {parsedData}
    </div>
  )
}

export default FetchComp

