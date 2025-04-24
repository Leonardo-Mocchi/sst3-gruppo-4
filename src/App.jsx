import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'
import HomePage from './pages/HomePage'
import SingleTravel from './pages/SingleTravel'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={HomePage} />
            <Route path="/:id" Component={SingleTravel} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
