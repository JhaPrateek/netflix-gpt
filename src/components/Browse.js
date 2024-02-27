import Header from './Header'
import useNowPlayingMovies from '../hooks/useBowPlayingMovies'
import usePopularMovies from '../hooks/useBowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();

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
