
import './Assets/main.css'
import Authentication from './auth/Authentication';
import UnAuthentication from './auth/UnAuthentication';
let token = true
function App() {
  
  if(token){
    return <Authentication/>
  }
  else{
    return <UnAuthentication/>
  }
}

export default App;
