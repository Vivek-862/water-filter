import { useState } from 'react'
import { createFileRoute } from "@tanstack/react-router";
import './App.css'

// import Home from "../src/pages/Home"
// import About from "../src/pages/About"
// import Products from "../src/pages/Products"


// export const HomeRoute = createFileRoute("/")({
//   component:Home
// })

// export const AboutRoute = createFileRoute("/about")({
//   component:About
// })

// export const ProductsRoute = createFileRoute("/Products")({
//   component:Products
// })

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='font-bold text-indigo-900 flex justify-center '>
       <h2>SalesX</h2>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
       <p className='text-red-900'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non error aliquam minus, excepturi praesentium culpa ad optio eveniet? Sapiente quas consectetur illum repellat excepturi perferendis eveniet labore provident sint, ipsam molestiae repellendus! Ad nesciunt ea porro deserunt harum repellat obcaecati. Voluptas quasi explicabo a tenetur sit optio reiciendis debitis vitae?</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
