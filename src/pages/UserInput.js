function UserInput () {
    
    const [text, setText] = useState(null);
   
    const clickHandler = (event) => {
        // When clicked, set text to value of input box
        event.preventDefault();
        // console.log("Clicked");
        let s = document.getElementById("search");
        let b = document.getElementById("search1");
        let c = document.getElementById("search2");


        setText(s.value);
       
    };

}

export default UserInput;