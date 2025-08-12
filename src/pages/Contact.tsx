// src/pages/Contact.tsx
// Displays contact methods and personal information for hiring inquiries.

import {
  FaFacebook,
  FaLinkedin,
  FaEnvelope,
  FaGithub,
  FaBirthdayCake,
  FaUser,
  FaGlobe,
  FaCity,
  FaFlag,
} from "react-icons/fa";

// Helper function to calculate age
const calculateAge = (birthDate: string) => {
  const birth = new Date(birthDate);
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
};

const Contact = () => {
  const age = calculateAge("2002-01-17");

  return (
    <div className="px-4 py-12 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-6 text-center text-green-700 dark:text-green-400">
        CONTACT INFORMATION!
      </h2>
      <p className="mb-6 text-center text-lg font-medium">
        Contact me through these methods:
      </p>

      <div className="flex flex-col md:flex-row md:space-x-12">
        {/* Left column - Contact Methods */}
        <div className="flex-1 mb-8 md:mb-0">
          <h3 className="text-2xl font-semibold mb-4">Contact Methods</h3>
          <ul className="space-y-4 text-gray-800 dark:text-gray-200">
            <li>
              <span className="inline-flex items-center space-x-2">
                <FaLinkedin />
                <strong>LinkedIn:</strong>
                <a
                  href="https://www.linkedin.com/in/brianshiroe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  linkedin.com/in/brianshiroe
                </a>
              </span>
            </li>
            <li>
              <span className="inline-flex items-center space-x-2">
                <FaGithub />
                <strong>GitHub:</strong>
                <a
                  href="https://github.com/brianshiroe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  github.com/brianshiroe
                </a>
              </span>
            </li>
            <li>
              <span className="inline-flex items-center space-x-2">
                <FaGlobe />
                <strong>Itch.io:</strong>
                <a
                  href="https://mun-development.itch.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  mun-development.itch.io
                </a>
              </span>
            </li>
            <li>
              <span className="inline-flex items-center space-x-2">
                <FaEnvelope />
                <strong>Email:</strong>
                <a
                  href="mailto:brianshiroe@gmail.com"
                  className="hover:underline"
                >
                  brianshiroe@gmail.com
                </a>
              </span>
            </li>
            <li>
              <span className="inline-flex items-center space-x-2">
                <FaFacebook />
                <strong>Facebook:</strong>
                <a
                  href="https://facebook.com/brianshiroe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  facebook.com/brianshiroe
                </a>
              </span>
            </li>
          </ul>
        </div>

        {/* Right column - Personal Information */}
        <div className="flex-1">
          <h3 className="text-2xl font-semibold mb-4">Information</h3>
          <ul className="space-y-4 text-gray-800 dark:text-gray-200">
            <li>
              <span className="inline-flex items-center space-x-2">
                <FaUser />
                <strong>Name:</strong>
                <span>Brian Haw</span>
              </span>
            </li>
            <li>
              <span className="inline-flex items-center space-x-2">
                <FaUser />
                <strong>Handle:</strong>
                <span>Brianshiroe</span>
              </span>
            </li>
            <li>
              <span className="inline-flex items-center space-x-2">
                <FaBirthdayCake />
                <strong>Age:</strong>
                <span>{age} Years Old</span>
              </span>
            </li>
            <li>
              <span className="inline-flex items-center space-x-2">
                <FaBirthdayCake />
                <strong>Birth Date:</strong>
                <span>January 17, 2002</span>
              </span>
            </li>
            <li>
              <span className="inline-flex items-center space-x-2">
                <FaCity />
                <strong>City:</strong>
                <span>Dubai</span>
              </span>
            </li>
            <li>
              <span className="inline-flex items-center space-x-2">
                <FaFlag />
                <strong>Country:</strong>
                <span>United Arab Emirates</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
