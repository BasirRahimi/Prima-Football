import './TeamCard.css';

type TeamType = {
  firstEleven: Array<{
    dateOfBirth: string;
    firstname: string;
    height: number;
    id: string;
    lastname: string;
    nationality: string;
    position: string;
    squadNumber: number;
    __typename: string;
  }>;
  id: string;
  name: string;
  stadium: string;
  __typename: string;
}

interface TeamProps {
  team: TeamType,
  isHome: boolean
}

function TeamCard({team, isHome}:TeamProps) {

  let lineup = team.firstEleven.map(player=>{
    return(
      <tr className="player">
        <td>{player.lastname}</td>
        <td>{player.firstname}</td>
        <td>{player.position}</td>
        <td>{player.squadNumber}</td>
      </tr>
    );
  })

  return (
    <div className="team-card">
      <div className="team-name">{team.name}</div>
      <div className="venue">{isHome ? 'Home' : 'Away'}</div>
      <b>Lineup</b>
      <table>
        {lineup}
      </table>
    </div>
  )
}

export default TeamCard
