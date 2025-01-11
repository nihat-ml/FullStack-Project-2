import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./members.css";
import axios from 'axios';
import { FaHeart } from "react-icons/fa";
import Swal from 'sweetalert2';

function Members() {
  const [members, setMembers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const navigate = useNavigate();

  
  function getMembers() {
    axios.get("http://localhost:3001/members")
      .then((res) => {
        setMembers(res.data);
      });
  }

  useEffect(() => {
    getMembers();
  }, []);

  
  const handleDelete = (_id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this immigrant record!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:3001/members/${_id}`)
          .then(() => {
            Swal.fire(
              'Deleted!',
              'The immigrant has been deleted.',
              'success'
            );
            setMembers(members.filter(member => member._id !== _id));
          })
          .catch((err) => {
            Swal.fire(
              'Error!',
              'There was an issue deleting the immigrant.',
              'error'
            );
            console.error('Error deleting immigrant:', err);
          });
      }
    });
  };

  
  const filteredMembers = members.filter((member) =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

 
  const sortedMembers = [...filteredMembers].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.monthlyIncome - b.monthlyIncome;
    } else {
      return b.monthlyIncome - a.monthlyIncome;
    }
  });

  return (
    <div className="members-container">
      <h2 className="members-title">Our Team Members</h2>

      
      <div className="controls">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button
          onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
          className="sort-button"
        >
          Sort by Income ({sortOrder === "asc" ? "Az Maas" : "Cox Maas"})
        </button>
        <button variant="success" onClick={() => navigate('/addpage')}>Add Immigrant</button>
      </div>

      <div className="members-grid">
        {sortedMembers.map((member) => (
          <div className="member-card" key={member._id}>
            <img src={member.image} alt={member.name} className="member-image" />
            <h3 className="member-name">{member.name}</h3>
            <p className="member-specialty">{member.specialty}</p>
            <p className="member-income">
              Monthly Income: ${member.monthlyIncome}
            </p>
            <div className="member-actions">
              <button
                className="action-button delete-button"
                onClick={() => handleDelete(member._id)}
              >
                Delete
              </button>
              <button className="action-button detail-button">Detail</button>
              <button className="action-button edit-button">Edit</button>
              <button className="action-button favorite-button">
                <FaHeart />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Members;
