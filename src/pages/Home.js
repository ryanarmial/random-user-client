import React from 'react';
import { useHistory } from 'react-router-dom';
import useFetch from '../utils/useFetch.js';

function Home() {
  const [users, isLoading, error] = useFetch('https://randomuser.me/api/?results=5');
  const history = useHistory();

  async function onClickAdd(user) {
    const newUser = {
      name: `${user.name.title}. ${user.name.first} ${user.name.last}`,
      email: user.email,
      phone_number: user.cell,
      gender: user.gender,
      location: `${user.location.city}, ${user.location.country}`,
      picture: user.picture.thumbnail,
    };

    const response = await fetch('http://localhost:4000/users/', {
      method: 'POST',
      body: newUser,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    const { data } = await response.json();
    history.push(`/users/${data[0]}`);
  }

  if (error) {
    return <h1>Error</h1>;
  }
  return (
    <div className="container mx-auto max-w-screen-lg">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <table className="table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Picture</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Phone Number</th>
              <th className="px-4 py-2">Gender</th>
              <th className="px-4 py-2">Location</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.results.map((user, i) => (
                <tr key={i.toString()}>
                  <td className="border px-4 py-2">{i + 1}</td>
                  <td className="border px-4 py-2">
                    <img className="rounded-full" src={user.picture.thumbnail} alt="" />
                  </td>
                  <td className="border px-4 py-2">{`${user.name.title}. ${user.name.first} ${user.name.last}`}</td>
                  <td className="border px-4 py-2">{user.email}</td>
                  <td className="border px-4 py-2">{user.cell}</td>
                  <td className="border px-4 py-2">{user.gender}</td>
                  <td className="border px-4 py-2">{`${user.location.city}, ${user.location.country}`}</td>
                  <td className="border px-4 py-2">
                    <button
                      onClick={() => onClickAdd(user)}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      ADD
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Home;
