import './Player.css';
import { useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBirthdayCake, faGlobeEurope, faRulerVertical, faStreetView, faTshirt } from '@fortawesome/free-solid-svg-icons';
import {useEffect } from 'react';

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
  const navigate = useNavigate();
  
  let { id } = useParams();
  let player = props.data.find((x:PlayerType)=>{
    return x.id === id;
  });

  useEffect(()=>{
    if(!player) {
      navigate('/');
    }
  });
  
  if(player) {
    return (
      <div className="Player">
        <h2>{player.firstname} {player.lastname}</h2>
        <div className="player-details">
          <p><FontAwesomeIcon icon={faBirthdayCake} />{player.dateOfBirth}</p>
          <p><FontAwesomeIcon icon={faGlobeEurope} />{player.nationality}</p>
          <p><FontAwesomeIcon icon={faRulerVertical} />{player.height} cm</p>
          <p><FontAwesomeIcon icon={faStreetView} />{player.position}</p>
          <p><FontAwesomeIcon icon={faTshirt} />{player.squadNumber}</p>
        </div>
      </div>
    )
  } else {
    return (
      <div></div>
    )
  }
}

export default Player
