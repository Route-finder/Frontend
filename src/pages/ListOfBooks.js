/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

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
