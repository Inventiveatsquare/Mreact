import React, {Component} from 'react';

/* this class component for state management either we ue state or redux for foodapp */



import NavbarTop from './NavbarTop';
import BottomNav from './BottomNav';
import ContentArea from './ContentArea';

class MainLayout extends Component {
  render(){
      return (
          <div className="">
               <NavbarTop/>
               <ContentArea/>
               <ContentArea/>
               <ContentArea/>
               <BottomNav/>
          </div>
         
      )
  }
}

export default MainLayout;