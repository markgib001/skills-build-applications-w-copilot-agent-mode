import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Activities = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch('https://refactored-xylophone-pgjpwwjw4rf9r7w-8000.app.github.dev/api/activities')
      .then(response => response.json())
      .then(data => setActivities(data));
  }, []);

  return (
    <div className="card">
      <div className="card-body">
        <h1 className="card-title">Activities</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {activities.map(activity => (
              <tr key={activity.id}>
                <td>{activity.id}</td>
                <td>{activity.name}</td>
                <td>
                  <a href="#" className="btn btn-link">View Activity Details</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Activities;
