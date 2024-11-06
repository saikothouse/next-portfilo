import Image from "next/image";

export default function Home() {
  return (
    <div className="text-center p-6">
      {/* Profile Section */}
      <div className="mb-8">
        <img
          src="/profile.jpg" // Replace with your actual image path
          alt="Your Name"
          className="w-32 h-32 rounded-full mx-auto border-4 border-gray-300"
        />
        <h2 className="text-3xl font-bold mt-4">Welcome to My Portfolio</h2>
        <p className="mt-2 text-lg">Hi, I'm [Your Name], a Next.js Developer.</p>
      </div>

      {/* Skills Section */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold">Skills</h3>
        <ul className="mt-4 space-y-2">
          <li className="bg-gray-200 inline-block px-4 py-2 rounded-full">JavaScript</li>
          <li className="bg-gray-200 inline-block px-4 py-2 rounded-full">React</li>
          <li className="bg-gray-200 inline-block px-4 py-2 rounded-full">Next.js</li>
          <li className="bg-gray-200 inline-block px-4 py-2 rounded-full">Tailwind CSS</li>
          <li className="bg-gray-200 inline-block px-4 py-2 rounded-full">Node.js</li>
        </ul>
      </section>

      {/* Call to Action */}
      <div className="mt-6">
        <a
          href="/projects"
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition duration-300"
        >
          View My Projects
        </a>
      </div>

      {/* Testimonials Section */}
      <section className="mt-8 p-4 bg-gray-100 rounded-lg">
        <h3 className="text-xl font-semibold">What People Say</h3>
        <blockquote className="mt-2 italic">
          "Your work is outstanding! You have a great eye for design and functionality."
        </blockquote>
        <p className="mt-1 text-sm text-gray-600">— Happy Client</p>
      </section>
    </div>
  );
}
