import React,{Component} from 'react'
import { Routes,Route} from 'react-router-dom'
import Admin from './pages/Admin'
import Login from './pages/Login'


export default class App extends Component {

  render() {
    return (
        <Routes>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/login" element={<Login />}></Route>
          {/* <Route path="/" element={<Navigate to ="/login" />}/> */}
        </Routes>
    )
  }
}