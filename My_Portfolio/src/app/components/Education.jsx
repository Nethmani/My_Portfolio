import React from 'react';
import { FaGraduationCap, FaSchool } from 'react-icons/fa';

export default function Education() {
  const educationData = [
    {
      type: 'university',
      icon: <FaGraduationCap className="text-xl text-blue-400" />,
      institution: 'Sri Lanka Institute of Information Technology',
      location: 'Malabe, Colombo, Sri Lanka',
      degree: 'BSc (Hons) in Information Technology',
      specialization: 'Specializing in Information Technology',
      period: '2022 – Present',
      additionalInfo: 'Successfully completed Higher Diploma in Information Technology (2022-2024)'
    },
    {
      type: 'school',
      icon: <FaSchool className="text-xl text-blue-400" />,
      institution: 'Sandalanka Central College',
      location: 'Sandalankawa, Sri Lanka',
      degree: 'G.C.E Advanced Level (A/L)-2019-2021 ',
      specialization: 'Physical Science Stream ',
      period: '2013-2021',
      additionalInfo: 'G.C.E Advanced Level (O/L) - 2018'
    }
  ];

  return (
    <div className="mt-8">
      <h3 className="text-xl text-center font-semibold text-white mb-4 flex items-center gap-2">
        <FaGraduationCap className="text-blue-400" />
        Education
      </h3>
      
      <div className="space-y-4">
        {educationData.map((edu, index) => (
          <div 
            key={index}
            className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-800/70 transition-all duration-300"
          >
            <div className="flex items-start gap-3">
              <div className="mt-1">
                {edu.icon}
              </div>
              <div className="flex-grow">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                  <div>
                    <h4 className="text-base font-medium text-white">
                      {edu.institution}
                    </h4>
                    <p className="text-sm text-gray-400">{edu.location}</p>
                  </div>
                  <span className="text-sm text-blue-400 font-medium whitespace-nowrap">
                    {edu.period}
                  </span>
                </div>
                
                <div className="mt-2">
                  <p className="text-sm text-gray-300">
                    {edu.degree}
                    {edu.specialization && ` - ${edu.specialization}`}
                  </p>
                  {edu.additionalInfo && (
                    <p className="text-xs text-gray-400 mt-1">
                      {edu.additionalInfo}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 