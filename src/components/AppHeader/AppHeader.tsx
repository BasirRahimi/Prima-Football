import './AppHeader.css';
import logo from '../../images/primalogo.png';
import { Link } from 'react-router-dom';

function AppHeader() {
  return (
    <div className="App-header">
      <Link to="/" className="logo">
        <img src={logo} alt="Prima"/>
        <div className="logo-suffix">football</div>
      </Link>
    </div>
  )
}

export default AppHeader;
