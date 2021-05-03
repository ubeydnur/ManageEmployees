import { useState,useEffect } from 'react'

const Pagination = ({pages,setCurrentPage}) => {

    const numOfPages = []

    for (let i = 1; i <= pages; i++) {
        numOfPages.push(i)
    }

    const [currentButton, setCurrentButton] = useState(1)

    useEffect(() => {
        setCurrentPage(currentButton)
    },[currentButton,setCurrentPage])

    return (
        <div className="clearfix">
            <div className="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
            <ul className="pagination">
                <li className={`${currentButton === 1 ? 'page-item disabled' : 'page-item'}`}>
                    <a href="#!" className='page-link'
                        onClick={() => setCurrentButton((prev) => prev === 1 ? prev : prev - 1)}>Previous</a>
                </li>
                {
                    numOfPages.map((page, i) => {
                        return (
                            <li key={i} className={`${currentButton === page ? 'page-item active' : 'page-item'}`}>
                                <a href="#!" className='page-link'
                                    onClick={()=>setCurrentButton(page) }>{page}</a>
                            </li>
                        )
                    })
                }
                <li className={`${currentButton === numOfPages.lenght ? 'page-item disabled' : 'page-item'}`}>
                    <a href="#!" className='page-link'
                        onClick={() => setCurrentButton((prev) => prev === numOfPages.lenght ? prev : prev + 1)}>Next</a>
                </li>
            </ul>
        </div>
    )
}
export default Pagination