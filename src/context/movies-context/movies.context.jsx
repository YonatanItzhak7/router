
import {createContext,useState,useEffect} from 'react'
import moviesApi from '../../services/movies.api'

export const movieContext = createContext()

function MovieProvider({children}){
    const [movies,setMovies] = useState([])
    useEffect(()=>{
        moviesApi().then(res => setMovies(res))
    },[])
    return(
        <movieContext.Provider value={{movies,setMovies}}>
            {children}
        </movieContext.Provider>
    )
}

export default MovieProvider;