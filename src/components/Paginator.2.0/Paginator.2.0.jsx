import React from 'react'

function Pagination_v_2({ totalItemsCount, pageSize, currentPage, onChangePage, paginationSize }) {
		
	const totalPages = Math.ceil(totalItemsCount / pageSize)
	const paginationSizeCount = Math.ceil(totalPages / paginationSize)		
	let pages = []
	for (let i = 1; i <= totalPages; i++) {
		pages.push(i)
	}

	const [paginationSizeCountNumber, setPaginationSizeCountNumber] = React.useState(Math.floor(currentPage/10) + 1)	
	const leftPaginationSizeCountNumber = (paginationSizeCountNumber - 1) * paginationSize + 1
	const rightPaginationSizeCountNumber = paginationSizeCountNumber * paginationSize

	return (
		<nav aria-label="Page navigation example">
			<ul className="pagination">

				{paginationSizeCountNumber > 1 && 
					<li 				
						className="page-item"
						onClick={() => setPaginationSizeCountNumber(paginationSizeCountNumber -1)}
					>
						<span className="page-link" aria-label="Previous">
							<span aria-hidden="true">&laquo;</span>
						</span>
					</li>
				}
				
				{pages
					.filter(page => page >= leftPaginationSizeCountNumber && page <= rightPaginationSizeCountNumber)
					.map(page =>
						<li 
							key={page}
							className={currentPage === page ? "page-item active" : "page-item"}
							onClick={()=> onChangePage(page)}
						>
							<span 
								className="page-link"			
							>
								{page}
							</span>
						</li>	
					)
				}

				{paginationSizeCount > paginationSizeCountNumber && 
					<li 					
						className="page-item"
						onClick={() => setPaginationSizeCountNumber(paginationSizeCountNumber + 1)}
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

export default Pagination_v_2
