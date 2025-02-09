import './App.css'
import { useState } from 'react'

function App() {
  const [query, setQuery] = useState('');

  function check(word: string) {
    if (word !== '') {
      return word.split("").reverse().join("") === word ? "is palindrome" : "not palindrome"
    }
  }

  return (
    <>
      <p>Palindrome checker</p>
      <input value={query} onChange={({target}) => setQuery(target.value)}/>
      <p>{check(query)}</p>
    </>
  )
}

export default App
