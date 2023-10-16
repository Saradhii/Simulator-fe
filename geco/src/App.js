import { BrowserRouter as Router, Switch} from 'react-router-dom';
import HomeTwo from './pages/homes/HomeTwo';
import HomeOne from './pages/homes/HomeOne';
import HomeThree from './pages/homes/HomeThree';
import Shop from './pages/store/Shop';
import Contact from './pages/contact/Contact';
import Community from './pages/community/Community';
import Overview from './pages/overview/Overview';
import AboutUs from './pages/aboutpage/aboutuspage/AboutUs';
import Upcoming from './pages/aboutpage/upcoming/Upcoming';
import GameSingle from './pages/aboutpage/singlegame/GameSingle';
import Blogs from './pages/blogs/Blogs';
import BlogDetails from './pages/blogdetails/BlogDetails'
import ScrollToTopRoute from './components/scrolltotop/ScrollToTopRoute';
import HomeFour from './pages/homes/HomeFour';
import HomeFive from './pages/homes/HomeFive';
import HomeSix from './pages/homes/HomeSix';
import HomeSeven from './pages/homes/HomeSeven';
import { useState } from 'react';
import AuthRoute from './components/AuthRoute';
// import Loader from "react-js-loader";





function App() {
      const [isAuthenticated, setIsAuthenticated] = useState(false);
      //  const [loading,setLoading] = useState(false);

      //  useEffect(()=>{
      //   setLoading(true)
      //   setTimeout(()=>{
      //     setLoading(false)
      //   },8000)
      //  },[])
      //  {
      //   loading ?(
      //     <MoonLoader color={color} loading={loading} css={override} size={150} />
      //   )
         
  
      // }
  return (
    
    <div className="App">
      
     <Router>
       
        <Switch>
        {/* <AuthRoute
          exact
          path="/home"
          component={HomeFour}
          isAuthenticated={isAuthenticated} // Change this to reflect actual authentication status
          authenticationPath="/" // Change this to the login page path
        /> */}
        {/* <AuthRoute
          exact
          path="/"
          component={Contact}
          isAuthenticated={false} // Change this to reflect actual authentication status
          authenticationPath="/" // Change this to the login page path
        /> */}
        <ScrollToTopRoute exact={true} path='/'>
          {/* <HomeTwo/> */}
          <Contact/>
        </ScrollToTopRoute>
        <ScrollToTopRoute exact={true} path='/index-2'>
        <HomeOne/>
        </ScrollToTopRoute>
        <ScrollToTopRoute exact={true} path='/index-3'>
        <HomeThree/>
        <HomeTwo/>
        </ScrollToTopRoute>
        <ScrollToTopRoute exact={true} path='/shop'>
         <Shop/>
        </ScrollToTopRoute>
        <ScrollToTopRoute exact={true} path='/contact'>
        <Contact/>
        </ScrollToTopRoute>
        <ScrollToTopRoute exact={true} path='/community'>
        <Community/>
        </ScrollToTopRoute>
        <ScrollToTopRoute exact={true} path='/overview'>
        <Overview/>
        </ScrollToTopRoute>
        
        <ScrollToTopRoute exact={true} path='/about-us'>
        <AboutUs/>
        </ScrollToTopRoute>
        <ScrollToTopRoute exact={true} path='/upcoming-games'>
        <Upcoming/>
        </ScrollToTopRoute>
        <ScrollToTopRoute exact={true} path='/game-single'>
        <GameSingle/>
        </ScrollToTopRoute>
        
        <ScrollToTopRoute exact={true} path='/blogs'>
        <Blogs/>
        </ScrollToTopRoute>
        
        <ScrollToTopRoute exact={true} path='/blog-details'>
        <BlogDetails/>
        </ScrollToTopRoute>
        <ScrollToTopRoute exact={true} path='/home'>
        <HomeFour/>
        </ScrollToTopRoute>
        <ScrollToTopRoute exact={true} path='/index-5'>
        <HomeFive/>
        </ScrollToTopRoute>
        <ScrollToTopRoute exact={true} path='/index-6'>
        <HomeSix/>
        </ScrollToTopRoute>
        <ScrollToTopRoute exact={true} path='/index-7'>
        <HomeSeven/>
        </ScrollToTopRoute>
        
     </Switch>
     </Router>
     
    </div>
  );
}

export default App;
