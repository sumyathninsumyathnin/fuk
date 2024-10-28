import React from 'react'
import NavBar from './NavBar';
import SideBar from './SideBar';
import MainContent from './MainContent';

const Layout = ({children}) => {
  return (
    <div>
        <NavBar/>
        <div className='w-full bg-slate-400 flex justify-between'>
            <SideBar />
            <MainContent children={children}/>
        </div>
    </div>
    
  )
}

export default Layout
