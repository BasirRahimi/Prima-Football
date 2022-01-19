import './NextMatch.css';
import { GET_NEXT_MATCH } from '../..';
import { useQuery } from '@apollo/client';
import TeamCard from '../TeamCard/TeamCard';

function NextMatch() {
  const { loading, error, data } = useQuery(GET_NEXT_MATCH);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  
  const date = new Date(data.nextMatch.date);
  const months = [
    'January',
    'Febuary',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  
  return (
    <div className="next-match">
      
      <div className="details">
        <p className="title">Next Match</p>
        <p>
          {months[date.getMonth()]} {date.getDate()}, {date.getFullYear()}
          <br/>
          {date.getHours()}:{date.getMinutes()}
        </p>
        <p>{data.nextMatch.home.stadium}</p>
      </div>

      <div className="teams">
        <TeamCard team={data.nextMatch.home} isHome={true} />
        <TeamCard team={data.nextMatch.away} isHome={false} />
      </div>

    </div>
  )
}

export default NextMatch;
