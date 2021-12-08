import React from "react";

function ListOfBooksPage() {
	const [data, setData] = React.useState(null);
	
		React.useEffect(() => {
			fetch("http://library-guide.herokuapp.com/api/books")
				.then((res) => res.json())
				.then((data) => {
					setData(data)
				});
		}, []);
	  
    return (
        <div>
            The list of Books to Search

            <p>{!data ? "Loading..." : "Data coming soon :D"}</p>
        </div>
    )
}

export default ListOfBooksPage;
