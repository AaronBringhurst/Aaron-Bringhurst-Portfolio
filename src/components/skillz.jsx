import React, { useState, useEffect } from "react";
import { Layout, Server, Database, Palette } from "lucide-react";

const SkillCard = ({ title, icon: Icon, description, skills, artworks }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex items-center mb-4">
      <Icon className="w-8 h-8 text-blue-500 mr-2 flex-shrink-0" />
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
    </div>
    <p className="text-gray-600 mb-4">{description}</p>
    <div>
      <h4 className="text-lg font-medium text-blue-600 mb-2">Key Skills:</h4>
      <ul className="text-gray-600 space-y-1 px-6">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-start">
            <span className="mr-2 mt-1 flex-shrink-0">•</span>
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </div>
    {artworks && artworks.length > 0 && (
      <div className="mt-4">
        <h4 className="text-lg font-medium text-blue-600 mb-2">Art Samples:</h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {artworks.map((artwork, index) => (
            <img
              key={index}
              src={artwork}
              alt={`Artwork sample ${index + 1}`}
              className="w-full h-24 object-cover rounded-md hover:opacity-80 transition-opacity cursor-pointer"
              onClick={() => window.open(artwork, "_blank")}
            />
          ))}
        </div>
      </div>
    )}
  </div>
);

const Skillz = () => {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      const imageModules = import.meta.glob("../assets/docs/images/artwork/*");
      const imageUrls = await Promise.all(
        Object.values(imageModules).map(async (importImage) => {
          const imported = await importImage();
          return imported.default;
        })
      );
      setArtworks(imageUrls);
    };

    loadImages();
  }, []);

  return (
    <div className="max-w-6xl mx-auto mb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SkillCard
          title="Front-End Development"
          icon={Layout}
          description="I specialize in creating responsive and interactive user interfaces using modern web technologies."
          skills={[
            "React.js for building dynamic UIs",
            "Redux for state management",
            "HTML5 & CSS3 for structure and styling",
            "JavaScript (ES6+) for client-side logic",
            "Responsive design with Flexbox and Grid",
            "CSS preprocessors (Sass/SCSS)",
            "Webpack & Babel for bundling and transpiling",
          ]}
        />
        <SkillCard
          title="Back-End Development"
          icon={Server}
          description="I build robust server-side applications and APIs to power web applications."
          skills={[
            "Node.js for server-side JavaScript",
            "Express.js for building web applications and APIs",
            "RESTful API design and implementation",
            "Authentication and authorization (JWT, OAuth)",
            "Server-side rendering with Next.js",
            "GraphQL API development",
            "Microservices architecture",
          ]}
        />
        <SkillCard
          title="Database Management"
          icon={Database}
          description="I work with both SQL and NoSQL databases to store and manage application data efficiently."
          skills={[
            "MongoDB for NoSQL database solutions",
            "Mongoose ODM for data modeling",
            "SQL databases (MySQL, PostgreSQL)",
            "Database design and optimization",
            "Data validation and sanitization",
            "Caching strategies (Redis)",
            "Database migrations and versioning",
          ]}
        />
        <SkillCard
          title="Prompt Engineering & AI Art"
          icon={Palette}
          description="I leverage AI tools and prompt engineering to create unique digital art and enhance creative workflows."
          skills={[
            "Prompt engineering for AI art generation",
            "Photoshop for advanced image editing",
            "GIMP for open-source image manipulation",
            "Leonardo.ai for AI-assisted digital art",
            "Midjourney for creating concept art and illustrations",
            "ChatGPT for creative writing and ideation",
            "Combining AI outputs with traditional digital art techniques",
          ]}
          artworks={artworks}
        />
      </div>
    </div>
  );
};

export default Skillz;
