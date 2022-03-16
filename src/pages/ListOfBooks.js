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
		let url = "https://library-guide.herokuapp.com/api/books?name=" + localStorage.getItem("name");
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setData(data.results)
			});
	}, []);

    const [text, setText] = useState(null);

    const changeText = (event) => {
        event.preventDefault();
        let changeIt = "Currently Searching Shortest Route, Please Be PATIENT!";
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
			<div id="buttons">
				<button class="mui-btn mui-btn--danger mui-btn--raised">
					Remove Selected Items
				</button>
				{/* Onclick function will eventually display the map for a shortest path of the selected books */}
				<button class="mui-btn mui-btn--primary mui-btn--raised" onClick = {changeText}>
					View Map and Key
				</button>
				
			</div>

			
            

            <div>
                {!text ? " ": text}
            </div>
        </div>
    );
}

export default ListOfBooksPage;
