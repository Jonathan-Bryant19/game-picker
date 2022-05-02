
import React, { useEffect } from 'react'
import { Routes, Route, useNavigate, Link } from "react-router-dom"
import Login from './components/Login'

function App() {
  
  // consider deleteing the h1 and setup a navigation hook to go to "/"
  
  // const [user, setUser] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    console.log("useEffect triggered")
    // fetch('/me').then(r => {
    //     if (r.ok) {
    //         r.json().then(user => setUser(user))
    //     } else {
    //         if (r.status === 401) {
    //             navigate('/')
    //         }
    //     }
    // })

    navigate('/')

  }, [])

  return (
    <>
      <Routes>
          <Route path= "/" element={<Login />}/>
          {/* <Route path= "/home" element={<Home setUser={setUser} user={user}/>}/>
          <Route path= "/profile" element={<Profile setUser={setUser} user={user}/>}/>
          <Route path= "/quizzes/:id" element={<Quiz />}/> */}
      </Routes>
    </>
  );
}

export default App;
