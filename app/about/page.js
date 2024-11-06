"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from 'react-icons/fa';

export default function About() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/users/saikothouse/repos?per_page=5'); // Replace with your GitHub username
        const data = await response.json();
        setProjects(data);
      } catch (err) {
        setError('Failed to fetch projects');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <div className="flex items-center mb-6">
        <Image
          src="/path/to/your/profile-picture.jpg" // Replace with your actual image path
          alt="Profile Picture"
          width={100}
          height={100}
          className="rounded-full mr-4"
        />
        <p className="text-gray-700">
          I am a passionate web developer with experience in building modern web applications using Next.js, React, and other technologies. I love creating user-friendly interfaces and optimizing performance for a seamless user experience.
        </p>
      </div>

      <h3 className="text-2xl font-semibold mb-4">Skills</h3>
      <ul className="grid grid-cols-2 gap-4 mb-6">
        <li className="flex items-center">
          <FaHtml5 className="text-orange-500 mr-2" size={24} />
          <span className="text-gray-700">HTML5</span>
        </li>
        <li className="flex items-center">
          <FaCss3Alt className="text-blue-500 mr-2" size={24} />
          <span className="text-gray-700">CSS3</span>
        </li>
        <li className="flex items-center">
          <FaReact className="text-blue-600 mr-2" size={24} />
          <span className="text-gray-700">React</span>
        </li>
        <li className="flex items-center">
          <FaNodeJs className="text-green-500 mr-2" size={24} />
          <span className="text-gray-700">Node.js</span>
        </li>
      </ul>

      <h3 className="text-2xl font-semibold mb-4">Projects</h3>
      {loading && <p className="text-gray-700">Loading projects...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && (
        <ul className="list-disc pl-5 text-gray-700">
          {projects.map((project) => (
            <li key={project.id}>
              <strong>{project.name}</strong>: {project.description || 'No description available.'}
              <br />
              <a href={project.html_url} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
