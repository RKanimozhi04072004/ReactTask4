import React, { useEffect, useState } from "react";
import Axios from "axios";

function UserTable() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    Axios.get("https://dummyjson.com/users")
      .then(function (response) {
        console.log("data", response.data);
        setUsers(response.data.users);
      })
      .catch(function (error) {
        console.error('Error', error);
      });
  }, []);

  return (
    <div class="container">
      <h1>Dummy data</h1>
      <table>
        <thead>
          <tr>
            <th>Sno</th>
            <th>Profile Pic</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Username</th>
            <th>Domain</th>
            <th>IP</th>
            <th>University</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              {/* <td>{user.image}</td> */}
              <td>
                <img src={user.image} alt="Profile" style={{ width: "50px" }} />
              </td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.gender}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.domain}</td>
              <td>{user.ip}</td>
             <td>{user.university}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;



