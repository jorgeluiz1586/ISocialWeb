import { useState } from 'react'
import ISocialLayout from '../../Layouts/ISocialLayout'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ISocialLayout>
        <div></div>
    </ISocialLayout>
  );
}

export default App
