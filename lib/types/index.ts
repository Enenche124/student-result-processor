// Type definitions for the Student Result Processing System

export interface Subject {
  id: string;
  name: string;
}

export interface Score {
  studentId: string;
  subjectId: string;
  ca: number;
  exam: number;
}

export interface Student {
  id: string;
  name: string;
}

export interface ClassInfo {
  className: string;
  term: string;
  session: string;
  schoolName: string;
}

export interface StudentResult {
  student: Student;
  scores: {
    subject: Subject;
    ca: number;
    exam: number;
    total: number;
    grade: string;
  }[];
  classInfo: ClassInfo;
}

export type Grade = 'A' | 'B' | 'C' | 'D' | 'F';
