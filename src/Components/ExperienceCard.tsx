import React, { useContext } from 'react';
import { ExperienceContext } from '../Context/Experience';
import { useParams } from 'react-router-dom';

const ExperienceDetails = () => {

    const { experienceId } = useParams<{ experienceId: string }>();
        const experienceData = useContext(ExperienceContext);
    if (!experienceData) {
        return <div className="p-10 text-white">No experience data available.</div>;
    }

    const entryId = parseInt(experienceId || '0', 10);
    const experienceEntry = experienceData.find(e => e.id === entryId);

    if (!experienceEntry) {
        return <div className="p-10 text-white">Experience not found.</div>;
    }
    
    const contentList = experienceEntry.content;

    return (
        <div className="py-10">            
            {contentList.map((item, index) => {
                const isRight = index % 2 === 0;

                //  (md:flex-row-reverse or md:flex)
                const baseClass = isRight ? 'md:flex' : 'md:flex md:flex-row-reverse';
                
                // (md:text-right or md:text-left)
                const dateAlignmentClass = isRight ? 'md:text-right' : 'md:text-left';

                // ( mt-4 flex-1)
                const cardMarginClass = isRight ? 'md:pl-8' : 'md:pr-8';
                const dateMarginClass = isRight ? 'md:pr-8' : 'md:pl-8';


                return (
                    <div 
                        key={item.id} 
                        className={`relative mb-12 md:items-center ${baseClass}`} 
                    >
                        
                        <div 
                            className="absolute left-4 top-0.5 md:top-1.5 size-4 -translate-x-1/2 rounded-full bg-primary ring-8 ring-background-light dark:ring-background-dark md:left-1/2 md:-translate-x-1/2" 
                        />
                        
                        <div className={`flex-1 ${dateMarginClass}`}>
                            <div className={dateAlignmentClass}>
                                <p className={`pl-8 md:pl-0 font-mono text-sm text-gray-500 dark:text-gray-400 ${isRight ? '' : 'md:pr-0'}`}>
                                    {item.date} 
                                </p>
                            </div>
                        </div>
                        <div className={`mt-4 flex-1 md:mt-0 ${cardMarginClass}`}>
                            <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-[#1A1D23]">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                                    {item.title}
                                </h3>
                                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                    {item.body}
                                </p>
                                <div className="mt-4 flex flex-wrap gap-4">
                                    {item.courseLink && (
                                        <a className="flex items-center gap-1.5 text-sm font-medium text-primary hover:underline" target="_blank" rel="noopener noreferrer" href={item.courseLink}>
                                            <span className="material-symbols-outlined text-base">link</span> Course
                                        </a>
                                    )}
                                    {item.certificateLink && (
                                        <a className="flex items-center gap-1.5 text-sm font-medium text-primary hover:underline" target="_blank" rel="noopener noreferrer" href={item.certificateLink}>
                                            <span className="material-symbols-outlined text-base">workspace_premium</span> Certificate
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ExperienceDetails;