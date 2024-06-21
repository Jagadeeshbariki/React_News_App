import React from 'react';
import styles from './NewsBanner.module.css';

const NewsBanner = (prop) => {
    const {url, title, urlToImage ,description, author, publishedAt} = prop.article;
    if(!(title === "[Removed]")){
  return (
    <div className={`${styles.NewsBannerContainer}`}>
        <p className={styles.NewsBannerHeading}>{title}</p>
        <img src={urlToImage} alt={title} width={300}/>
        <p className={styles.NewsBannerDescription}><b>Description:</b>{description}</p>
        <p className={styles.NewsBannerLink}>For More Inforamtion: <a href={url} target='_blank' rel="noreferrer" >Click Here</a></p>
        <div className={styles.NewsBannerFooter}>
            <p><i>Author</i>:{author}</p>
            <p><i>publishedAt</i>: {publishedAt}</p>
        </div>
    </div>
  )
}
}

export default NewsBanner
