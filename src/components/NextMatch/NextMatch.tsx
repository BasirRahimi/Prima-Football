import './NextMatch.css';
import TeamCard from '../TeamCard/TeamCard';

function NextMatch(props:any) {
  const date = new Date(props.data.date);
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
        <p>{props.data.home.stadium}</p>
      </div>

      <div className="teams">
        <TeamCard team={props.data.home} isHome={true} />
        <TeamCard team={props.data.away} isHome={false} />
      </div>

    </div>
  )
}

export default NextMatch;
