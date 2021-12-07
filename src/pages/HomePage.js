import MeetupList from '../components/meetups/MeetupList';
import Wrapper from '../components/ui/Wrapper';




function AllMeetupsPage() {
    return (
      <Wrapper>
        <form className = 'form'>
          <div>
            <p>Book Title: </p>
            <input type = "text"></input>
          </div>
          <div>
            <p>ISBN Number: </p>
            <input type = "text"></input>
          </div>
          <div>
            <p>Author: </p>
            <input type = "text"></input>
          </div>
          <br></br>
          <div>
            <button>Search</button>
          </div>
        </form>

      </Wrapper>
      
        
    )

}

export default AllMeetupsPage;