import { useState } from 'react';
import './TeamCard.css';
import { useNavigate } from 'react-router-dom';

type Player = {
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

type FirstEleven = Array<Player>;
    
type TeamType = {
  firstEleven: FirstEleven;
  id: string;
  name: string;
  stadium: string;
  __typename: string;
}

interface TeamProps {
  team: TeamType;
  isHome: boolean;
}

function TeamCard(props:TeamProps) {
  const [players, sortPlayers] = useState([...props.team.firstEleven]);

  const navigate = useNavigate();

  let sortLineup = function(orderBy:string) {
    if(orderBy === "lastname") {
      sortPlayers([...players].sort((a,b)=>{
        if(a.lastname > b.lastname) {
          return 1;
        } else if(a.lastname < b.lastname) {
          return -1;
        } else {
          return 0;
        }
      }));
    } else if(orderBy === "position") {
      sortPlayers([...players].sort((a,b)=>{
        if(a.position > b.position) {
          return 1;
        } else if(a.position < b.position) {
          return -1;
        } else {
          return 0;
        }
      }));
    }
    if(orderBy === "number") {
      sortPlayers([...players].sort((a,b)=>{
        if(a.squadNumber > b.squadNumber) {
          return 1;
        } else if(a.squadNumber < b.squadNumber) {
          return -1;
        } else {
          return 0;
        }
      }));
    }
  }
  return(
    <div className="team-card">
      <div className="team-name">{props.team.name}</div>
      <div className="venue">{props.isHome ? 'Home' : 'Away'}</div>
      <b>Lineup</b>
      <table>
        <thead>
          <tr>
            <td className="sortable" onClick={()=>{sortLineup('lastname')}}>Last name</td>
            <td>First name</td>
            <td className="sortable" onClick={()=>{sortLineup('position')}}>Position</td>
            <td className="sortable" onClick={()=>{sortLineup('number')}}>Number</td>
          </tr>
        </thead>
        <tbody>
          {players.map((player)=>{
            return (
              <tr key={player.id} className="player" onClick={()=>{navigate(`/player/${player.id}`)}}>
                <td>{player.lastname}</td>
                <td>{player.firstname}</td>
                <td>{player.position}</td>
                <td>{player.squadNumber}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
export default TeamCard