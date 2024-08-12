import React from 'react'
import CardCreate from "./cardCreate";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Home = () => {
  const navigate=useNavigate()
  return (
    <>
      <div className="content">
        <h1 className="text-red-300">My Projects</h1>
        <div className="cards">
          <Link to='/create-post'>
            <CardCreate
              key="1"
              title="create a new blog post"
              clickable="clickable-Cards"
            />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home