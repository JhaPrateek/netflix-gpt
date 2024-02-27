import Header from './Header'
import useNowPlayingMovies from '../hooks/useBowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {

  useNowPlayingMovies();

  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>

      {/*
          MainContainer
             -VideoBackground
             -VideoTitle
          SecondaryContainer
             -MovieList*n
             -Cards*n   
    */}
    </div>
  )
}

export default Browse
