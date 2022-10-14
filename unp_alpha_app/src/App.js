import './App.css';
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";


function App() {
return ( 
<div className="App">
<SignInForm />
<button onClick={event =>  window.location.href='./SignUpForm'}>
  Sign Up
  </button>
</div>


);
}

export default App;