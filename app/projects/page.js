"use client";

import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/saikothouse/repos'); // Replace with your GitHub username
        setProjects(response.data);
      } catch (err) {
        setError('Failed to fetch projects. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6">My Projects</h2>
      {loading && <p className="text-gray-700">Loading projects...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && (
        <ul className="space-y-4">
          {projects.map((project) => (
            <li key={project.id} className="border rounded-lg p-4 bg-gray-50 shadow-md transition-transform transform hover:scale-105">
              <h3 className="text-xl font-semibold">{project.name}</h3>
              <p className="text-gray-600">{project.description || 'No description available.'}</p>
              <div className="mt-2">
                <a
                  href={project.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View Project
                </a>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
