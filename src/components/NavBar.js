import React,{Component} from 'react';

// const NavBar = () => {
//   return(
//     <div>
//       <nav>
//         <ul className="nav-ul">
//           <li>le coté lumineux</li>
//           <li>le coté obscur</li>
//           <li>l'empire</li>
//           <li>les droïdes</li>
//           <li>les ewoks</li>
//           <li>jabba le huit</li>
//         </ul>
//       </nav>
//     </div>
//   )
// }

class NavBar extends Component {
  constructor(){
    super();
    this.state = {
      link: ['le coté lumineux', 'le coté obscur', 'l\'empire', 'les droïdes', 'les ewoks', 'jabba le huit']
    }
  }
  render(){
    return(
      <div>
        <nav>
          <ul className="nav-ul">
            <li>{this.state.link[0]}</li>
            <li>{this.state.link[1]}</li>
            <li>{this.state.link[2]}</li>
            <li>{this.state.link[3]}</li>
            <li>{this.state.link[4]}</li>
            <li>{this.state.link[5]}</li>
          </ul>
        </nav>
        
      </div>
    )
  }
}

export default NavBar;