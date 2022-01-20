import './App.css';
import AppHeader from './components/AppHeader/AppHeader';
import NextMatch from './components/NextMatch/NextMatch';
import Player from './components/Player/Player';
import { GET_NEXT_MATCH } from './index';
import { useQuery } from '@apollo/client';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const { loading, error, data } = useQuery(GET_NEXT_MATCH);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const players = [
    ...data.nextMatch.home.firstEleven,
    ...data.nextMatch.away.firstEleven
  ]
  return (
    <div className="App">
      <Router>
        <AppHeader />
        <Routes>
          <Route path="/" element={<NextMatch data={data.nextMatch} />} />
          <Route path="/player/:id" element={<Player data={players} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
