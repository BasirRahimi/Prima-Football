import './Player.css';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBirthdayCake, faGlobeEurope, faRulerVertical, faStreetView, faTshirt } from '@fortawesome/free-solid-svg-icons';

type PlayerType = {
  dateOfBirth: string;
  firstname: string;
  height: number;
  id: string;
  lastname: string;
  nationality: string;
  position: string;
  squadNumber: number;
  __typename: string;
}

function Player(props:any) {
  let { id } = useParams();
  let player = props.data.find((x:PlayerType)=>{
    return x.id === id;
  });
  return (
    <div className="Player">
      <h2>{player.firstname} {player.lastname}</h2>
      <div className="player-details">
        <p><FontAwesomeIcon icon={faBirthdayCake} />{player.dateOfBirth}</p>
        <p><FontAwesomeIcon icon={faGlobeEurope} />{player.nationality}</p>
        <p><FontAwesomeIcon icon={faRulerVertical} />{player.height} meters</p>
        <p><FontAwesomeIcon icon={faStreetView} />{player.position}</p>
        <p><FontAwesomeIcon icon={faTshirt} />{player.squadNumber}</p>
      </div>
    </div>
  )
}

export default Player
