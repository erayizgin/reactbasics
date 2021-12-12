import React, { useState, useEffect } from 'react';

export default function HooksUseeffect() {
  
  //if not used (), run function will run every time onClick
  const [resourceType, setResourceType] = useState('posts');
  const [items, setItems] = useState([]);
  
  console.log('render')
  
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    .then(response => response.json())
    .then(json => setItems(json))
  }, [resourceType])

  

  return (
    <>
      <button onClick={() => setResourceType('posts')}>Posts</button>
      <button onClick={() => setResourceType('users')}>Users</button>
      <button onClick={() => setResourceType('comments')}>Comments</button>
      <h1>{resourceType}</h1>
      {items.map(item => {
        return <pre>{JSON.stringify(item)}</pre>
      })}
    </>
  );
}
