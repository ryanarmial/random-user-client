import React from 'react';
import useFetch from '../utils/useFetch.js';
import { useParams, Link } from 'react-router-dom';

function Detail() {
  const { id } = useParams();
  const [user, isLoading, error] = useFetch(`http://localhost:4000/users/${id}`);

  if (error) {
    return <h1>Error</h1>;
  }

  console.log(user);

  return (
    <div className="container mx-auto max-w-screen-md border-gray-300">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1 className="text-3xl my-8">USER PROFILE</h1>
          {user && (
            <div className="detail">
              <div className="avatar my-4">
                <img className="inline rounded-full" src={user.data.picture} alt="" />
              </div>
              <div className="my-4">{user.data.name}</div>
              <div className="my-4">{user.data.email}</div>
              <div className="my-4">{user.data.phone_number}</div>
              <div className="my-4">{user.data.gender}</div>
              <div className="my-4">{user.data.location}</div>
              <Link
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                to="/"
              >
                Back
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Detail;
