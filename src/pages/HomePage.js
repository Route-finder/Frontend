/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import MeetupList from '../components/meetups/MeetupList';
import Wrapper from '../components/ui/Wrapper';
import {useState} from 'react';




function HomePage() {

  const [text, setText] = useState(null);
   
    const clickHandler = (event) => {
        // When clicked, set text to value of input box
        event.preventDefault();
        // console.log("Clicked");
        let s = document.getElementById("search");
        let b = document.getElementById("search1");
        let c = document.getElementById("search2");

		/**
		 * Submit request to backend with info for OCLC request
		 */

		// If ISBN provided, select the first result
		if (b.value != "") {
			let response = fetch("https://library-guide.herokuapp.com/api/search", {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json;charset=utf-8'
				},
				body: JSON.stringify(b.value)
			});
      console.log(response);
		}

		// If title or author provided, send as a request
		else if (s.vaule != "" || c.value != "") {
			let response = fetch("https://library-guide.herokuapp.com/api/search", {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json;charset=utf-8'
				},
				body: JSON.stringify({author: s.vaule, title: c.value})
			});
		}

		// Otherwise, return an error if no values provided
		else {
			alert("Please enter one or more values");
		}
		
        
        let allText = "Book Name: " + s.value + ", " + " ISBN: " + b.value + ", " + " Author: " + c.value;

        setText(allText);
        
    };





    return (
      <Wrapper>
        <form className = 'form'>
          <div>
            <p>Book Title: </p>
            <input id="search" type = "text"></input>
          </div>
          <div>
            <p>ISBN Number: </p>
            <input id="search1" type = "text"></input>
          </div>
          <div>
            <p>Author: </p>
            <input id="search2" type = "text"></input>
          </div>
          <br></br>
          <div>
            <button onClick = {clickHandler}>Search</button>
          </div>
        </form>

        <p>
          {!text ? "Empty Basket, please choose a book": text}
        </p>

      </Wrapper>
      
        
    )

}

export default HomePage;
