import React, { useState } from 'react';
import useUsers from '../../store/Users';
import './UsersTable.css';

const UsersTable = () => {
  const [modalOpened, setModalOpened] = useState(false);
  const { users, addUser } = useUsers();

  const handleUserAdd = (userId, name, designation, email) => {
    const newUser = {
      id: userId,
      name,
      designation,
      email
    };
    addUser(newUser);
    setModalOpened(false);
  };

  return (
    <div className="users-table-container">
      <h2>Users Table</h2>
      <table>
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>User ID</th>
            <th>Name</th>
            <th>Designation</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.designation}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => setModalOpened(true)}>Add User</button>
      {modalOpened && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setModalOpened(false)}>&times;</span>
            <h3>Add User</h3>
            <form onSubmit={(e) => {
              e.preventDefault();
              const userId = e.target.elements.userId.value;
              const name = e.target.elements.name.value;
              const designation = e.target.elements.designation.value;
              const email = e.target.elements.email.value;
              handleUserAdd(userId, name, designation, email);
            }}>
              <div className="form-group">
                <label htmlFor="userId">User ID:</label>
                <input type="text" id="userId" name="userId" required />
              </div>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="designation">Designation:</label>
                <input type="text" id="designation" name="designation" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
              </div>
              <button type="submit">Add</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UsersTable;
