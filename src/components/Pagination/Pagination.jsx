import React from 'react'
import './Pagination.css'

function Pagination({ totalCountUsers, pageSize, currentPage, onChangePage, pageRangeDisplayed }) {

	const totalPages = Math.ceil(totalCountUsers / pageSize)
	let pages = []
	let showPages = currentPage + (pageRangeDisplayed - 3)

	if (currentPage === 1) {
		showPages = 5
		for (let i = currentPage; i <= showPages; i++ ) {
			pages.push(i)
		}
	} else if (currentPage === 2) {
		showPages = 5
		for (let i = currentPage - 1; i <= showPages; i++ ) {
			pages.push(i)
		}
	} else if (currentPage > 2 && currentPage < totalPages - 1) {
		for (let i = currentPage - 2; i <= showPages; i++ ) {
			pages.push(i)
		}
	} else if (currentPage === totalPages) {	
		showPages = totalPages
		for (let i = currentPage - 4; i <= showPages; i++ ) {
			pages.push(i)
		}
	} else if (currentPage === totalPages - 1) {	
		showPages = totalPages
		for (let i = currentPage - 3; i <= showPages; i++ ) {
			pages.push(i)
		}
	}

	return (
		<nav className="paginator">
			<ul className="pagination">

				{currentPage !== 1 && 
					<li 
						onClick={() => onChangePage(1)}
						className="page-item"
					>
						<span className="page-link" aria-label="Previous">
							<span aria-hidden="true">&laquo;</span>
						</span>
					</li>
				}
				
				{pages.map( page => 
					<li 
						key={page}
						className={currentPage === page ? "page-item active" : "page-item"}
					>
						<span 
							className="page-link"				
							onClick={ () => onChangePage(page) }
						>
							{page}
						</span>
					</li>	
				)}

				{currentPage !== totalPages && 
					<li 
						onClick={() => onChangePage(totalPages)}
						className="page-item"
					>
						<span className="page-link" aria-label="Next">
							<span aria-hidden="true">&raquo;</span>
						</span>
					</li>
				}	

			</ul>
		</nav>
	)
}

export default Pagination
