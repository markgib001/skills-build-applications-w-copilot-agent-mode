import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Leaderboard = () => {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    fetch('https://refactored-xylophone-pgjpwwjw4rf9r7w-8000.app.github.dev/api/leaderboard')
      .then(response => response.json())
      .then(data => setLeaders(data));
  }, []);

  return (
    <div>
      {/* Added Bootstrap card for leaderboard summary */}
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">Leaderboard Summary</h5>
          <p className="card-text">Top performers this week.</p>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h1 className="card-title">Leaderboard</h1>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {leaders.map(leader => (
                <tr key={leader.id}>
                  <td>{leader.id}</td>
                  <td>{leader.name}</td>
                  <td>{leader.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
