import React, {useContext} from 'react'
import { ExperienceContext } from '../Context/Experience';
import { Link } from 'react-router-dom';

const ExperienceList = () => {

    const experienceData = useContext(ExperienceContext);
    if (experienceData === undefined) {
        return <div>No experience data available.</div>;
    }

  return (
    <>
    {
        experienceData.map((experience) => (
            <div key={experience.id} className="relative pl-8 border-l border-white/20">
                <div className="absolute -left-2 top-1 h-4 w-4 rounded-full bg-primary" />
                <p className="text-primary text-sm font-mono mb-1">{experience.dateRange}</p>
                <h3 className="text-white font-bold text-lg">{experience.title}</h3>
                <p className="text-text-light mt-2">{experience.body}</p>
                <Link to={`/experience/${experience.id}`} 
                    className='inline-flex items-center gap-2 text-accent-purple text-sm font-medium mt-4 hover:text-primary transition-colors'>
                    <span className="material-symbols-outlined text-base"> link </span>
                    View Details
                </Link>
            </div>
        ))
    }
    </>
  )
}

export default ExperienceList
