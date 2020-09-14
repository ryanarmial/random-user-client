import React from 'react';
import useFetch from './utils/useFetch.js';
import './App.css';
import './css/tailwind.css';

function App() {
  const [users, isLoading, error] = useFetch('https://randomuser.me/api/?results=10');
  if (error) {
    return <h1>Error</h1>;
  }

  return (
    <div className="text-center">
      <header className="bg-gray-800 m-6 p-6 rounded shadow-lg">
        <h1 className="text-white text-3xl">Random User List</h1>
      </header>
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
              {users.results &&
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
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        ADD
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default App;
