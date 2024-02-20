import React, { useEffect, useRef, useState } from 'react';
import { useQuizData } from '../context/QuizAppContext';

export default function MainScreen() {

  const { setGameState } = useQuizData()   

  const [searchTerm, setSearchTerm] = useState('');

  const [results, setResults] = useState([])

  const totalRef = useRef(0)

  const handleChange = (e) => {
    const value =  e.target.value.trim()
    setSearchTerm(value.toLowerCase())
  }

  
  // const Suggestions = ({results}) => {
  //   const options = results?.map(r => (
  //     <li key={r.id}>
  //       {r.title}
  //     </li>
  //   ))
  //   return <ul>{options}</ul>
  // }
  
  // export default Suggestions
            

const getResults = async () =>{
  try{
    const res = await fetch(`https://dummyjson.com/products/search?q=${searchTerm}`)
    const dt = await res.json()
    totalRef.current = dt?.total
    setResults(dt?.products)
  }
  catch(err){
    console.log('ERR',err)
  }
}

  useEffect(() => {
    let timer = null
    console.log('#SER 1',searchTerm)
    if(searchTerm && searchTerm?.length > 3){
      console.log('#SER 2',searchTerm)
      timer = setTimeout(() =>getResults(), 1000)
    }

    return () =>{
      clearTimeout(timer)
    }
  }, [searchTerm]);

  return (
    <>
       <h2>Main Menu</h2>
       <button onClick={() => {setGameState('quiz')}}>Start Quiz</button> 

       <br />
       <nav>
          {/* <Link to='/account'>ACCOUNT</Link>
          <Link to='/hotels'>HOTEL LIST</Link> */}
        </nav> 
        <div>TOTAL: {totalRef.current}</div>
        <div>
                        <input
                          type="text"
                          placeholder='Search here ...'
                          value={searchTerm}
                          onChange={(e) => handleChange(e)}
                        />
        </div> 
        {results?.length === 0 ? 'No DATA' : 
       
        results?.map((pdt,index) => (
          <span key={pdt?.id}>{pdt?.title}</span>
        ))
       }
        
         
    </>
  );  
}



