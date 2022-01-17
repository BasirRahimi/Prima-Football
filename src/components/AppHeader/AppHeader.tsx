import './AppHeader.css';
import logo from '../../images/primalogo.png';

function AppHeader() {
  return (
    <div className="App-header">
      <div className="logo">
        <img src={logo} alt="Prima"/>
        <div className="logo-suffix">football</div>
      </div>
    </div>
  )
}

export default AppHeader;
