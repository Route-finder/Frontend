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