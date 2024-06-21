import React, {  useEffect, useState } from 'react';
import styles from './ImpPage.module.css';
import Pagination from 'react-bootstrap/Pagination';
import { useDispatch } from 'react-redux';


const ImpPagination = ({articles}) => {
    
    const [currentPage, setCurrentPage] = useState(1);
    const [articlesPerPage] = useState(6);
    const dispatch = useDispatch();

   useEffect(()=>{
    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);
    dispatch({type:'SET_CUR_ARTICLES', payload:currentArticles});
    console.log(currentArticles)
   },[currentPage, articles, dispatch,articlesPerPage])


    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const totalPages = Math.ceil(articles.length / articlesPerPage);

  return (
    <div className={styles.PaginationContainer}>
       <Pagination>
                    <Pagination.First onClick={() => paginate(1)} disabled={currentPage === 1} />
                    <Pagination.Prev onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} />
                    {[...Array(totalPages).keys()].map(number => (
                        <Pagination.Item key={number + 1} active={number + 1 === currentPage} onClick={() => paginate(number + 1)}>
                            {number + 1}
                        </Pagination.Item>
                    ))}
                    <Pagination.Next onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages} />
                    <Pagination.Last onClick={() => paginate(totalPages)} disabled={currentPage === totalPages} />
                </Pagination>
    </div>
  )
}

export default ImpPagination
