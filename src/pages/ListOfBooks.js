import React from "react";

function ListOfBooksPage() {
	const [data, setData] = React.useState(null);
	
	  React.useEffect(() => {
	      fetch("http://127.0.0.1:3000/api/books")
	        .then((res) => res.json())
	        .then((data) => setData(data));
	  }, []);
	  
    return (
        <div>
            The list of Books to Search

            <p>{!data ? "Loading..." : data}</p>
        </div>
    )

}

export default ListOfBooksPage;
