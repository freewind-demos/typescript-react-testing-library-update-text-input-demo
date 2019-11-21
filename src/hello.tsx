//import * as React from 'react'
import React, {useState} from 'react'

export default function Hello() {

  const [name, setName] = useState('hello')

  return <div>
    <input type='text' value={name} onChange={() => undefined}/>
    <button onClick={() => setName('world')}>Click</button>
  </div>
};

