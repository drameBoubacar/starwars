import React,{Component} from 'react';

const colorLink = {
  color : 'blue'
}

class NavBar extends Component {
  constructor(){
    super();
    this.state = {
      link: ['le coté lumineux', 'le coté obscur', 'l\'empire', 'les droïdes', 'les ewoks', 'jabba le huit'],
      hover : colorLink
    }
  }
  handleHover = () => {
    this.setState({
      hover : colorLink
    })
  }
  render(){

    return(
      <div>
        <nav>
          <ul className="nav-ul">
          {this.state.link.map(function (link, index){ return  <li key={index}>{link}</li>}) }
          </ul>
        </nav>
        
      </div>
    )
  }
}

export default NavBar;