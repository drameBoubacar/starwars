import React,{Component} from 'react';

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
          {this.state.link.map(
            (link, index) => 
              <li key={index}>{link}</li>
          )}
          </ul>
        </nav>
        
      </div>
    )
  }
}

export default NavBar;