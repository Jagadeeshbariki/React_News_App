import styles from './App.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import NewsLogo from './Assets/News-Logo.png';
import Main from './Main/Main';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';


function App() {
    const [inpValue, setInpVal] = useState("");  // store the value of the Input field
    const dispatch = useDispatch();   //This useDispatch is used to pass the data to the reudcer
    


    const fnChange=(e)=>{
       setInpVal(e.target.value);
    }

    // Based the Given Input and filter buttons need to give the keyword to API
    const fnClick=(key)=>{

      if(key==="Business"){
        dispatch({type:'SET_KEYWORD', payload:key })  //passing the data to the reducer
        
      }
      else if(key === "Technology"){
        dispatch({type:'SET_KEYWORD', payload:key })
      }
      else if(key === "Entertainment"){
        dispatch({type:'SET_KEYWORD', payload:key })
      }
      else if(key === "news"){
        dispatch({type:'SET_KEYWORD', payload:key })
      }
      else{
       if(inpValue.trim()===""){
         alert("Please Enter Valid Kye Word")
       }
       else{
        dispatch({type:'SET_KEYWORD', payload:inpValue })
       }
      }
    }
    
    

  return (
   
      <div className={styles.App}>

        <header className={styles.Appheader}>

          <div className={styles.logo} onClick={()=>fnClick("news")}>
            <img src={NewsLogo} alt='NEWS' width={95}/>  {/* Logo of the news application */}
            <p className= { `${styles.heading} text-white`}>World News</p>
          </div>

          {/* Implementing the Search Option */}
          <div className={styles.Inputs}>
            <input type='text' placeholder='Search News' id='SearchKey' className={styles.input} onChange={fnChange} />  {/* Serching option  */}
            <button className={styles.searchBtn} onClick={fnClick}>Search</button>
          </div>


          {/* Implementing the Filter Button Based the Catagoary */}
          <div className='FileterContainer'>
            <button  className= {`${styles.filterBtn} btn btn-primary `} onClick={()=>fnClick("Business")}>Business</button>
            <button className= {`${styles.filterBtn} btn btn-primary `} onClick={()=>fnClick("Technology")}>Technology</button>
            <button className= {`${styles.filterBtn} btn btn-primary `} onClick={()=>fnClick("Entertainment")}>Entertainment</button>
          </div>
        </header>
        <Main/>
    </div>
  );
}

export default App;
