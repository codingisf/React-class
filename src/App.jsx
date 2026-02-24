// import "./App.css";
import Todo from './pages/Todo.jsx'
import LoginPage from './pages/LoginPage.jsx'
import SignupPage from './pages/SignupPage.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import ProtectionPage from './pages/ProtectionPage.jsx'
import {Routes , Route , useNavigate} from 'react-router-dom'

function App() {
 
  return (
    <Routes>
      {/* <Todo/>
      <LoginPage/> */}

      <Route  path='/login' element={ <LoginPage/>}/>
      <Route  path='/signup' element={ <SignupPage/>}/>
      <Route  path='/*' element={ <ErrorPage/>}/>


      <Route  path='/todo' element={
        <ProtectionPage>
          <Todo/>
        </ProtectionPage>
       }/>




    </Routes>
  );
}

export default App;
