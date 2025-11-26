import {createContext } from 'react';
import type { Experience } from '../Data/Experience';

type ExperienceContextType = Experience[] | undefined;

export const ExperienceContext = createContext<ExperienceContextType>(undefined);