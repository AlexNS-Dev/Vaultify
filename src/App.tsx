import { useState } from 'react';
import './App.css'
import PasswordDisplay from './components/PasswordDisplay/PasswordDisplay';

function App() {
  const [passwordLength, setPasswordLength] = useState(12);

  // SYMBOLS: ! @ # $ % ^ & * ( ) _ + - = [ ] { } ? . /
  // LOWERCASE: a b c d e f g h i j k l m n o p q r s t u v w x y z
  // UPPERCASE: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
  // NUMBERS: 0 1 2 3 4 5 6 7 8 9

  return (
    <main className="App">
      <PasswordDisplay length={passwordLength}/>
      <div className="settings card">
        <div className="setting-length">
          <label htmlFor="password-length-slider">{passwordLength}</label> <br />
          <input
            onChange={(event) => setPasswordLength(Number(event.target.value))}
            value={passwordLength}
            min={6}
            max={50}
            type="range"
            name="password-length"
            id='password-length-slider'
          />
        </div>
        <div className="setting-type"></div>
        <div className="setting-characters"></div>
      </div>
    </main>
  )
}

export default App
