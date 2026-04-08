import React from 'react';

// 1. Definimos la interfaz para tipar correctamente los datos
interface ExperienceItem {
  id: string | number;
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string[]; // Usamos un arreglo para mostrarlo como viñetas (bullet points)
  technologies: string[];
}

const experienceData: ExperienceItem[] = [
   {
     id: 1,
     role: "Specialized Technician",
     company: "H. Ayuntamiento de Solidaridad",
     startDate: "Aug 2025",
     endDate: "Present",
     description: [
       "Involved in the development and implementation of a new help desk system for the Honorable City Council of Solidaridad.",
       "Led the front-end team, managing tasks and coordinating projects.",
       "Actively participated in programming, designing, and improving technological processes aimed at operational efficiency and citizen service."
     ],
     technologies: ["React.js", "Python", "Docker", "SQL", "Flask"]
   },
   {
     id: 2,
     role: "Full-stack Developer",
     company: "Montsechia Eternal Flowers Project (Freelance)",
     startDate: "Sep 2024",
     endDate: "Present",
     description: [
       "Developed and maintained full-stack web applications as an independent professional."
     ],
     technologies: ["React.js", "Express.js", "Stripe", "CSS"]
   },
   {
     id: 3,
     role: "AEM Developer",
     company: "VASS",
     startDate: "Oct 2024",
     endDate: "Aug 2025",
     description: [
       "Implemented and managed front-end solutions and components using Adobe Experience Manager (AEM)."
     ],
     technologies: ["Adobe Experience Manager (AEM)", "Front-End Development", "React.js", "SCSS"]
   },
   {
     id: 4,
     role: "Jr. Technical Consultant",
     company: "Eviden",
     startDate: "Sep 2023",
     endDate: "Sep 2024",
     description: [
       "Provided technical consulting services focusing on HRSD implementations and ServiceNow solutions."
     ],
     technologies: ["HRSD", "ServiceNow"]
   },
   {
     id: 5,
     role: "AEM Fullstack Developer",
     company: "Anseris Consulting",
     startDate: "Jan 2024",
     endDate: "May 2024",
     description: [
       "Collaborated remotely on full-stack development projects leveraging Adobe Experience Manager and AngularJS."
     ],
     technologies: ["Adobe Experience Manager (AEM)", "AngularJS"]
   },
   {
     id: 6,
     role: "Graduate",
     company: "Atos",
     startDate: "Jan 2023",
     endDate: "Sep 2023",
     description: [
       "Participated in the graduate program, gaining hands-on experience with ServiceNow and HRSD modules."
     ],
     technologies: ["HRSD", "ServiceNow"]
   },
   {
     id: 7,
     role: "Website Developer",
     company: "Grupo MexBridge",
     startDate: "Nov 2021",
     endDate: "Jan 2023",
     description: [
       "Designed and developed the company's website to improve online presence.",
       "Managed server administration and maintenance."
     ],
     technologies: ["IT Service Management", "Web Development", "Web Design"]
   },
   {
     id: 8,
     role: "IT Technician",
     company: "Sitcom Mexico",
     startDate: "Feb 2021",
     endDate: "Nov 2021",
     description: [
       "Provided technical support for computer equipment.",
       "Implemented network infrastructure and security camera solutions for various restaurants, real estate agencies, and hotels in the Riviera Maya."
     ],
     technologies: ["IT Service Management", "Technical Support", "Network Management", "Customer Service", "IT Hardware Support"]
   },
   {
     id: 9,
     role: "Service Engineer",
     company: "KGE Comercializadora",
     startDate: "Aug 2019",
     endDate: "Apr 2020",
     description: [
       "Provided on-site technical support for computer equipment across various parks and hotels in the Riviera Maya."
     ],
     technologies: ["Technical Support", "Customer Service", "Web Development"]
   },
   {
     id: 10,
     role: "Front-End and Chatbot Developer",
     company: "Zmart Group",
     startDate: "Dec 2017",
     endDate: "Jul 2019",
     description: [
       "Developed chatbots, landing pages, a web portal, and a mobile application for the sale of services and airtime."
     ],
     technologies: ["CSS", "JavaScript", "HTML", "Web Development"]
   }
 ];

// 3. El componente principal
const ExperienceTimeline: React.FC = () => {
  return (
    <section className="max-w-3xl mx-auto p-4 md:p-8">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight">
        Professional Experience
      </h2>

      {/* Contenedor de la línea del tiempo */}
      <ol className="relative border-l border-gray-200 dark:border-gray-700 ml-3">
        {experienceData.map((exp) => (
          <li key={exp.id} className="mb-10 ml-6">
            {/* El punto indicador en la línea */}
            <span className="absolute flex items-center justify-center w-3 h-3 bg-blue-600 rounded-full mt-2 -left-[6.5px] ring-4 ring-white dark:ring-gray-900 dark:bg-blue-500"></span>
            
            {/* Encabezado: Puesto y Fechas */}
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-1">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {exp.role}
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-500 dark:text-gray-400 md:mb-0">
                {exp.startDate} – {exp.endDate}
              </time>
            </div>

            {/* Empresa */}
            <h4 className="text-md font-semibold text-blue-600 dark:text-blue-400 mb-3">
              {exp.company}
            </h4>

            {/* Descripción de tareas / logros */}
            <ul className="mb-4 text-base font-normal text-gray-600 dark:text-gray-300 list-disc list-outside ml-4 space-y-1.5">
              {exp.description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            {/* Tecnologías utilizadas (Badges/Pills) */}
            <div className="flex flex-wrap gap-2 mt-4">
              {exp.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded-full dark:bg-gray-800 dark:text-gray-300 border border-gray-200 dark:border-gray-600 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default ExperienceTimeline;