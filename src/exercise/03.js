// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

// 🐨 create your CountContext here with React.createContext

const CountContext = React.createContext()

const CountProvider = ({children, props}) => {
  const [count, setCount] = React.useState(0)

  return (
    <CountContext.Provider value={{count, setCount}} {...props}>
      {children}
    </CountContext.Provider>
  )
}

const useCount = () => {
  const context = React.useContext(CountContext)

  if (!context)
    throw new Error('useCount must be rendered inside of CountProvider')

  return {...context}
}

function CountDisplay() {
  const {count} = useCount()

  // 🐨 get the count from useContext with the CountContext
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  const {setCount} = useCount()

  const increment = () => setCount(c => c + 1)

  // 🐨 get the setCount from useContext with the CountContext
  return <button onClick={increment}>Increment count</button>
}

function App() {
  return (
    <>
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
    </>
  )
}

export default App
