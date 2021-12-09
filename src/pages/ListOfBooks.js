/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import React from "react";
import Table from 'rc-table';
import {useState} from 'react';

function ListOfBooksPage() {
	const [data, setData] = React.useState(null);
	
	/**
	 * Data in form:
	 * {results: [
	 *   {isbn, author, title, call_no},
	 *   ...
	 * ]}
	 */

	React.useEffect(() => {
		fetch("https://library-guide.herokuapp.com/api/books")
			.then((res) => res.json())
			.then((data) => {
				setData(data.results)
			});
	}, []);

    const [text, setText] = useState(null);
   
    const changeText = (event) => {
        // When clicked, set text to value of input box
        event.preventDefault();
        // console.log("Clicked");
       let changeIt = "CurrentlySearching";

        setText(changeIt);
        
    };


	const columns = [
		{
		  title: 'Title',
		  dataIndex: 'title',
		  key: 'title',
		},
		{
		  title: 'Author',
		  dataIndex: 'author',
		  key: 'author',
		},
		{
		  title: 'Call Number',
		  dataIndex: 'call_no',
		  key: 'call_no',
		},
	];

    return (
        <div>
            <h1>Books to be Found</h1>
            
            <Table columns={columns} data={data} /> 
            <br />
            <button onClick = {changeText}>Search</button> 
            <br />  
            <div>
                {!text ? " ": text}
            </div>
        </div>
    );
}

export default ListOfBooksPage;
