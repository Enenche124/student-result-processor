// Zustand store for managing application state

import { create } from 'zustand';
import { Student, Subject, Score, ClassInfo } from '@/lib/types';

interface ResultStore {
  students: Student[];
  subjects: Subject[];
  scores: Score[];
  classInfo: ClassInfo;
  
  // Student actions
  addStudent: (name: string) => void;
  removeStudent: (id: string) => void;
  updateStudent: (id: string, name: string) => void;
  
  // Subject actions
  addSubject: (name: string) => void;
  removeSubject: (id: string) => void;
  updateSubject: (id: string, name: string) => void;
  
  // Score actions
  updateScore: (studentId: string, subjectId: string, ca: number, exam: number) => void;
  getScore: (studentId: string, subjectId: string) => Score | undefined;
  
  // Class info actions
  updateClassInfo: (info: Partial<ClassInfo>) => void;
  
  // Reset
  reset: () => void;
}

const generateId = () => Math.random().toString(36).substring(2, 9);

export const useResultStore = create<ResultStore>((set, get) => ({
  students: [],
  subjects: [],
  scores: [],
  classInfo: {
    className: '',
    term: '',
    session: '',
    schoolName: 'Demo School',
  },
  
  addStudent: (name: string) => {
    const newStudent: Student = {
      id: generateId(),
      name,
    };
    set((state) => ({ students: [...state.students, newStudent] }));
  },
  
  removeStudent: (id: string) => {
    set((state) => ({
      students: state.students.filter((s) => s.id !== id),
      scores: state.scores.filter((sc) => sc.studentId !== id),
    }));
  },
  
  updateStudent: (id: string, name: string) => {
    set((state) => ({
      students: state.students.map((s) =>
        s.id === id ? { ...s, name } : s
      ),
    }));
  },
  
  addSubject: (name: string) => {
    const newSubject: Subject = {
      id: generateId(),
      name,
    };
    set((state) => ({ subjects: [...state.subjects, newSubject] }));
  },
  
  removeSubject: (id: string) => {
    set((state) => ({
      subjects: state.subjects.filter((s) => s.id !== id),
      scores: state.scores.filter((sc) => sc.subjectId !== id),
    }));
  },
  
  updateSubject: (id: string, name: string) => {
    set((state) => ({
      subjects: state.subjects.map((s) =>
        s.id === id ? { ...s, name } : s
      ),
    }));
  },
  
  updateScore: (studentId: string, subjectId: string, ca: number, exam: number) => {
    set((state) => {
      const existingScoreIndex = state.scores.findIndex(
        (s) => s.studentId === studentId && s.subjectId === subjectId
      );
      
      const newScore: Score = { studentId, subjectId, ca, exam };
      
      if (existingScoreIndex >= 0) {
        const newScores = [...state.scores];
        newScores[existingScoreIndex] = newScore;
        return { scores: newScores };
      } else {
        return { scores: [...state.scores, newScore] };
      }
    });
  },
  
  getScore: (studentId: string, subjectId: string) => {
    return get().scores.find(
      (s) => s.studentId === studentId && s.subjectId === subjectId
    );
  },
  
  updateClassInfo: (info: Partial<ClassInfo>) => {
    set((state) => ({
      classInfo: { ...state.classInfo, ...info },
    }));
  },
  
  reset: () => {
    set({
      students: [],
      subjects: [],
      scores: [],
      classInfo: {
        className: '',
        term: '',
        session: '',
        schoolName: 'Demo School',
      },
    });
  },
}));
