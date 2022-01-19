import React from 'react';
import './TeamCard.css';

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
interface TeamState {
  players: Array<Player>
}

class TeamCard extends React.Component<TeamProps, TeamState> {
  constructor(props:TeamProps) {
    super(props);
    this.state = {
      players: props.team.firstEleven
    };
  }
  
  sortLineup(orderBy:string) {
    if(orderBy === "lastname") {
      this.setState((state)=>{
        return {
          players: [...state.players].sort((a,b)=>{
            if(a.lastname > b.lastname) {
              return 1;
            } else if(a.lastname < b.lastname) {
              return -1;
            } else {
              return 0;
            }
          })
        }
      })
    } else if(orderBy === "position") {
      this.setState((state)=>{
        return {
          players: [...state.players].sort((a,b)=>{
            if(a.position > b.position) {
              return 1;
            } else if(a.position < b.position) {
              return -1;
            } else {
              return 0;
            }
          })
        }
      })
    }
    if(orderBy === "number") {
      this.setState((state)=>{
        return {
          players: [...state.players].sort((a,b)=>{
            if(a.squadNumber > b.squadNumber) {
              return 1;
            } else if(a.squadNumber < b.squadNumber) {
              return -1;
            } else {
              return 0;
            }
          })
        }
      })
    }

    console.log(this.state);
  }

  render() {
    return (
      <div className="team-card">
        <div className="team-name">{this.props.team.name}</div>
        <div className="venue">{this.props.isHome ? 'Home' : 'Away'}</div>
        <b>Lineup</b>
        <table>
          <thead>
            <tr>
              <td className="sortable" onClick={()=>{this.sortLineup('lastname')}}>Last name</td>
              <td>First name</td>
              <td className="sortable" onClick={()=>{this.sortLineup('position')}}>Position</td>
              <td className="sortable" onClick={()=>{this.sortLineup('number')}}>Number</td>
            </tr>
          </thead>
          <tbody>
            {this.state.players.map((player)=>{
              return (
                <tr key={player.id} className="player">
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
    );
  }
}

export default TeamCard
