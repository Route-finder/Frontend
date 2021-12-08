/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import React from "react";
import ReactTable from "react-table";

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
		fetch("http://library-guide.herokuapp.com/api/books")
			.then((res) => res.json())
			.then((data) => {
				setData(data.results)
			});
	}, []);

	const tableData = React.useMemo(() => [
		{ col1: 'Hello', col2: 'World'},
		{col1: 'react-table', col2: 'rocks'},
		{col1: 'whatever', col2: 'you want'}
	], []);

	const columns = React.useMemo(() => [
			{ Header: 'Title', accessor: 'title' },
			{ Header: 'Author', accessor: 'author' },
			{ Header: 'Call Number', accessor: 'call_no' }
		],
		[]
	);

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
	} = ReactTable.useTable({columns, tableData})

    return (
        <div>
            <h1>Books to be Found</h1>

			<table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
       		<thead>
				{headerGroups.map(headerGroup => (
					<tr {...headerGroup.getHeaderGroupProps()}>
						{headerGroup.headers.map(column => (
							<th {...column.getHeaderProps()} style={{
								borderBottom: 'solid 3px red',
								background: 'aliceblue',
								color: 'black',
								fontWeight: 'bold',
							}}>
								{column.render('Header')}
							</th>
						))}
					</tr>
				))}
			</thead>
       		<tbody {...getTableBodyProps()}>
				{rows.map(row => {
				prepareRow(row)
				return (
					<tr {...row.getRowProps()}>
						{row.cells.map(cell => {
						return (
							<td {...cell.getCellProps()} style={{
								padding: '10px',
								border: 'solid 1px gray',
								background: 'papayawhip',
							}}>
								{cell.render('Cell')}
							</td>
						)})}
					</tr>
				)})}
			</tbody>
		</table>
        </div>
    );
}

export default ListOfBooksPage;
