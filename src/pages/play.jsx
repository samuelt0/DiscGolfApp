import React, { useState } from 'react';
import './play.css';

const Play = () => {
  const [players, setPlayers] = useState([{ id: 1, name: 'Player 1' }]);
  const [scores, setScores] = useState([{ id: 1, scores: Array(18).fill(0) }]);
  const [numHoles, setNumHoles] = useState(18);

  const addPlayer = () => {
    const newPlayerId = players.length + 1;
    const newPlayer = { id: newPlayerId, name: `Player ${newPlayerId}` };
    setPlayers([...players, newPlayer]);
    setScores([...scores, { id: newPlayerId, scores: Array(numHoles).fill(0) }]);
  };

  const removePlayer = (playerId) => {
    setPlayers(players.filter(player => player.id !== playerId));
    setScores(scores.filter(score => score.id !== playerId));
  };

  const handlePlayerNameChange = (playerId, newName) => {
    setPlayers(players.map(player => {
      if (player.id === playerId) {
        return { ...player, name: newName };
      }
      return player;
    }));
  };

  const handleScoreChange = (playerId, holeIndex, value) => {
    setScores(scores.map(score => {
      if (score.id === playerId) {
        const newScores = [...score.scores];
        newScores[holeIndex] = value;
        return { ...score, scores: newScores };
      }
      return score;
    }));
  };

  const handleNumHolesChange = (event) => {
    const newNumHoles = parseInt(event.target.value);
    setNumHoles(newNumHoles);
    setScores(scores.map(score => {
      const currentScores = score.scores;
      if (currentScores.length < newNumHoles) {
        const newScores = [...currentScores, ...Array(newNumHoles - currentScores.length).fill(0)];
        return { ...score, scores: newScores };
      } else if (currentScores.length > newNumHoles) {
        const newScores = currentScores.slice(0, newNumHoles);
        return { ...score, scores: newScores };
      }
      return score;
    }));
  };

  return (
    <div className="scorecard">
      <div className="scorecard-header">
        <h2>Disc Golf Scorecard</h2>
        <div>
          <button onClick={addPlayer}>Add Player</button>
          <select onChange={(e) => handleNumHolesChange(e)} value={numHoles}>
            {[...Array(18)].map((_, i) => (
              <option key={i} value={i + 1}>{i + 1}</option>
            ))}
          </select>
        </div>
      </div>
      <table className="scorecard-table">
        <thead>
          <tr>
            <th>Player</th>
            {[...Array(numHoles)].map((_, i) => (
              <th key={i}>Hole {i + 1}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <tr key={player.id}>
              <td>
                <div className="remove-button-container">
                  <button onClick={() => removePlayer(player.id)}>Remove</button>
                    <input
                      type="text"
                      value={player.name}
                      onChange={(e) => handlePlayerNameChange(player.id, e.target.value)}
                    />
                </div>
              </td>

              {scores.find(score => score.id  === player.id)?.scores.map((score, holeIndex) => (
                <td key={holeIndex}>
                  <input
                    type="number"
                    value={score}
                    onChange={(e) => handleScoreChange(player.id, holeIndex, parseInt(e.target.value))}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Play;
