import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { MemoryRouter, Route, Routes, Link, matchPath, useLocation } from 'react-router-dom'
import { StaticRouter } from 'react-router-dom/server'
import { Stack, Box, Tabs, Tab } from '@mui/material'
import { FcCableRelease } from "react-icons/fc";
import { BsCart4, BsSearch } from "react-icons/bs";

import Main from './Main';
import Comf from '../components/Comf';
import Cover from '../components/Cover';
import Fabric from '../components/Fabric';
import Goose from '../components/Goose';
import Topper from '../components/Topper';
import Wool from '../components/Wool';

function Router(props) {
  const { children } = props;
  if (typeof window === 'undefined') {
    return <StaticRouter location="/drafts">{children}</StaticRouter>;
  }
  return <MemoryRouter initialEntries={['/drafts']} initialIndex={0}>{children}</MemoryRouter>;
}
Router.propTypes = {
  children: PropTypes.node,
};

function useRouteMatch(patterns) {
  const { pathname } = useLocation();
 
  for( let i = 0; i < patterns.length; i++) {
     const pattern = patterns[i];
     const possibleMatch = matchPath(pattern, pathname);
     if(possibleMatch !== null){
        return possibleMatch;
     }
  }
   
   return null;
}

function MyTabs() {
  const routeMatch = useRouteMatch(
     ['/Comf', '/Cover', '/Topper', '/Wool', '/Goose', '/Fabric']);
  const currentTab = routeMatch?.pattern?.path;

  return (
     <Tabs value={currentTab}>
         <Tab label="차렵이불/세트" value="/Comf" to="/comf" component={Link} />
         <Tab label="이불커버/홑이불" value="/Cover" to="/cover" component={Link} />
         <Tab label="토퍼/패드" value="/Topper" to="/topper" component={Link} />
         <Tab label="양모 이불" value="/Wool" to="/wool" component={Link} />
         <Tab label="솜/구스" value="/Goose" to="/goose" component={Link} />
         <Tab label="페브릭소품" value="/Fabric" to="/fabric" component={Link} />
     </Tabs>
  );
}

const Navigation = () => {
  const [ showSearchBox, setShowSearchBox] = useState(false);
  const handleClick = () => {
    setShowSearchBox(!showSearchBox);
  }
  return (
    <Router>
      <Box sx={{ width: '100%', boxShadow: 2 }}>
        <Stack 
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        style={{
                  "padding":"10px 40px",
                  "fontSize":"16px",
                  "backgroundColor":"#fff", 
                  "boxShadow":"0 0 5px 0 rgba(0,0,0,0.1), 0 0 25px 0 rgba(0,0,0,0.05)"
              }}
        >
          <Box display="flex" alignItems="center" justifyContent="start">
            <Link className="logo"><FcCableRelease /></Link>
            <span className="bar"></span>
            {/* MyTabs 콤포넌트 */}
            <MyTabs />
          </Box>
          <Box className="nav-right-box" display="flex" alignItems="center" justifyContent="end">
              <div className="search" onClick={handleClick}>
                { showSearchBox && (
                  <div className="searchbox">
                      <form>
                          <input type="search" name="search" placeholder="search" />
                          <BsSearch style={{fontSize:"1rem"}} />
                      </form>
                  </div>
                )}  
                  <BsSearch />
              </div>
              <Link><BsCart4 className="cart" /></Link>
          </Box>
        </Stack> 
        <Routes>
           <Route path="*" element={<Main />} />
           <Route path="/comf" element={<Comf />} />
           <Route path="/cover" element={<Cover />} />
           <Route path="/topper" element={<Topper />} />
           <Route path="/wool" element={<Wool />} />
           <Route path="/goose" element={<Goose />} />
           <Route path="/fabric" element={<Fabric />} />
        </Routes>
      </Box>  
   </Router>
  )
}

export default Navigation