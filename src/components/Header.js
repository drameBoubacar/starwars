import React,{Component} from 'react';


// const Header = () => {
//   return(
//     <div>
//       <section className="header">
        
//       </section>
//     </div>
//   )
// }

// export default Header;

export default class Header extends Component {
  handleScroll = () => {
    console.log('scrolling');
  }
  render(){
    return(
      <div>
        <button onScroll={this.handleScroll}>Scroll</button>
      </div>
    )
  }
}