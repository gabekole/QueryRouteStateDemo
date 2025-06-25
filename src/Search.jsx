import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import usersData from './users.json';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Search() {
  const query = useQuery();
  const searchTerm = query.get('name') || '';
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    setFilteredUsers(
      usersData.filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [searchTerm]);

  return (
    <div>
      <h2>Search Users</h2>
      <ul>
        {filteredUsers.map(user => (
          <li key={user.id}>
            <Link to={`/user/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
