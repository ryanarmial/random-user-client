import React from 'react';
import './App.css';
import './css/tailwind.css';

function App() {
  return (
    <div className="text-center">
      <header className="bg-gray-800 m-6 p-6 rounded shadow-lg">
        <h1 className="text-white text-3xl">Random User List</h1>
      </header>
      <div class="container mx-auto">
        <table class="table-auto">
          <thead>
            <tr>
              <th class="px-4 py-2">ID</th>
              <th class="px-4 py-2">Picture</th>
              <th class="px-4 py-2">Name</th>
              <th class="px-4 py-2">Email</th>
              <th class="px-4 py-2">Phone Number</th>
              <th class="px-4 py-2">Gender</th>
              <th class="px-4 py-2">Location</th>
              <th class="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border px-4 py-2">1</td>
              <td class="border px-4 py-2">
                <img
                  className="rounded-full"
                  src="https://randomuser.me/api/portraits/thumb/men/75.jpg"
                  alt=""
                />
              </td>
              <td class="border px-4 py-2">Mr. Brad Gibson</td>
              <td class="border px-4 py-2">brad.gibson@example.com</td>
              <td class="border px-4 py-2">081-454-0666</td>
              <td class="border px-4 py-2">Male</td>
              <td class="border px-4 py-2">Waterford, Kilcoole</td>
              <td class="border px-4 py-2">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  ADD
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
