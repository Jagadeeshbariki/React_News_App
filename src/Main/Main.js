import React, { useContext, useEffect, useState } from 'react';
import styles from './Main.module.css';
import axios from 'axios';
import Loader from '../Loader/Loader';
import NewsBanner from '../NewsBanner/NewsBanner';
import keycontext from '../keyWordContext';


const Main = () => {
   
    const [article, setArticle] = useState([]);
    const [showLoader, setShowLoader] = useState(false)
    let keyword = useContext(keycontext);

    if(!keyword){
      keyword="news"
    }

    useEffect(()=>{
        setShowLoader(true);
        const fetchNews = async()=>{
            try{
                const response = await axios.get(`https://newsapi.org/v2/everything?q=${keyword}&apikey=091fcdf40de64946b7816a9cdb744d55`);
                setArticle(response.data.articles);
                
            }
            catch(err){
                console.log("Somthing went Wrong", err);
            }
            finally{
                setShowLoader(false);
                // if the fetching data is success or fail, the loader should be disappear
            }
        }
        fetchNews();
    }, [keyword])
  return (
   
      <div id={styles.Main}>
          {showLoader && <Loader/>}
        {/* <h1>News article</h1> */}
        <div className={styles.MainCantainer}>
          {article.map((obj, ind)=>{
            return <div key={ind}>
                  
                  <NewsBanner article={obj} />
              </div>
          })}
      </div>
    </div>
  )
}

export default Main
