/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import Wrapper from '../components/ui/Wrapper';
import {useState} from 'react';

function HomePage() {

  const [text, setText] = useState(null);
   
    const clickHandler = (event) => {
      // When clicked, set text to value of input box
      event.preventDefault();
      
      // Save the entered username
      let uName = document.getElementById("username").value;
      console.log(uName);
      localStorage.setItem("name", uName);
      setText(`Welcome, ${uName}!`);
    };

    return (
      <Wrapper>
        <form className = 'form'>
          <div>
            <p>Name</p>
            <input id="username" type = "text"></input>
          </div>
          <div>
            <button onClick = {clickHandler}>Submit</button>
          </div>
        </form>

        <p>
          {!text ? "Please enter your name before continuing": text}
        </p>

      </Wrapper>
      
        
    )

}

export default HomePage;
