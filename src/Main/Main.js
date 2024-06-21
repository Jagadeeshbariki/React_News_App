import React, { useEffect, useState } from 'react';
import {   useDispatch, useSelector } from 'react-redux';
import styles from './Main.module.css';
import axios from 'axios';
import Loader from '../Loader/Loader';
import NewsBanner from '../NewsBanner/NewsBanner';
import ImpPagination from '../Pagination/ImpPagination';
import PageError from '../ErrorPage/PageError';




const Main = () => {
   
    const [article, setArticle] = useState([]);
    // const [showLoader, setShowLoader] = useState(false);
    // const [showErrorPage, setShowErrorPae] = useState(false);
    const {keyword, currentArticle , showLoader, showErrorpage} = useSelector(state=>state.appReducer);
    const dispatch= useDispatch();
  
   
    console.log(showErrorpage)


    
    useEffect(()=>{

        dispatch({type:'SET_SHOWLOADER', payload:true})
        const fetchNews = async()=>{
            try{
              
                const response = await axios.get(`https://newsapi.org/v2/everything?q=${keyword}&apikey=091fcdf40de64946b7816a9cdb744d5`); //091fcdf40de64946b7816a9cdb744d55
                setArticle(response.data.articles);
                
            }
            catch(err){
                // setShowErrorPae(true)
                dispatch({type:'SET_SHOW_ERROR_PAGE', payload:true})
                console.log("Somthing went Wrong", err);
            }
            finally{
                dispatch({type:'SET_SHOWLOADER', payload:false})
                // if the fetching data is success or fail, the loader should be disappear
            }
        }
        
        if(keyword){
          fetchNews();
        }
        
    }, [keyword, dispatch])


  return (
   
      <div id={styles.Main}>
          {showLoader && <Loader/>}
          {showErrorpage && <PageError/>}
        {/* <h1>News article</h1> */}
        <div className={styles.MainCantainer}>
          {currentArticle.map((obj, ind)=>{
            return <div key={ind}>
                  <NewsBanner article={obj}/>    {/* Rendering the NewsBanner Component*/}
              </div>
          })}
      </div>
      <ImpPagination articles={article}/>     { /* Rendering the Pagination Component*/}
    </div>
  )
}

export default Main
