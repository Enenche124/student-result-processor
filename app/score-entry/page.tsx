'use client';

import { useState } from 'react';
import { useResultStore } from '@/lib/store/useResultStore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { calculateGrade, calculateTotal } from '@/lib/utils/grading';
import { PDFGenerator } from '@/components/result/PDFGenerator';
import { StudentResult } from '@/lib/types';

export default function ScoreEntryPage() {
  const {
    students,
    subjects,
    scores,
    classInfo,
    addStudent,
    removeStudent,
    addSubject,
    removeSubject,
    updateScore,
    getScore,
    updateClassInfo,
    reset,
  } = useResultStore();

  const [studentName, setStudentName] = useState('');
  const [subjectName, setSubjectName] = useState('');
  const [selectedStudent, setSelectedStudent] = useState<string | null>(null);

  const handleAddStudent = () => {
    if (studentName.trim()) {
      addStudent(studentName.trim());
      setStudentName('');
    }
  };

  const handleAddSubject = () => {
    if (subjectName.trim()) {
      addSubject(subjectName.trim());
      setSubjectName('');
    }
  };

  const handleScoreChange = (
    studentId: string,
    subjectId: string,
    field: 'ca' | 'exam',
    value: string
  ) => {
    const numValue = parseInt(value) || 0;
    const currentScore = getScore(studentId, subjectId);
    
    if (field === 'ca') {
      updateScore(studentId, subjectId, numValue, currentScore?.exam || 0);
    } else {
      updateScore(studentId, subjectId, currentScore?.ca || 0, numValue);
    }
  };

  const getStudentResult = (studentId: string): StudentResult | null => {
    const student = students.find((s) => s.id === studentId);
    if (!student) return null;

    const studentScores = subjects.map((subject) => {
      const score = getScore(studentId, subject.id);
      const ca = score?.ca || 0;
      const exam = score?.exam || 0;
      const total = calculateTotal(ca, exam);
      const grade = calculateGrade(total);

      return {
        subject,
        ca,
        exam,
        total,
        grade,
      };
    });

    return {
      student,
      scores: studentScores,
      classInfo,
    };
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Score Entry</h1>

        {/* Class Information */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Class Information</CardTitle>
            <CardDescription>Enter the class, term, and session details</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <Label htmlFor="schoolName">School Name</Label>
                <Input
                  id="schoolName"
                  value={classInfo.schoolName}
                  onChange={(e) => updateClassInfo({ schoolName: e.target.value })}
                  placeholder="Enter school name"
                />
              </div>
              <div>
                <Label htmlFor="className">Class Name</Label>
                <Input
                  id="className"
                  value={classInfo.className}
                  onChange={(e) => updateClassInfo({ className: e.target.value })}
                  placeholder="e.g., Grade 10A"
                />
              </div>
              <div>
                <Label htmlFor="term">Term</Label>
                <Input
                  id="term"
                  value={classInfo.term}
                  onChange={(e) => updateClassInfo({ term: e.target.value })}
                  placeholder="e.g., First Term"
                />
              </div>
              <div>
                <Label htmlFor="session">Session</Label>
                <Input
                  id="session"
                  value={classInfo.session}
                  onChange={(e) => updateClassInfo({ session: e.target.value })}
                  placeholder="e.g., 2024/2025"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Add Students */}
          <Card>
            <CardHeader>
              <CardTitle>Students</CardTitle>
              <CardDescription>Add students to the class</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2 mb-4">
                <Input
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  placeholder="Student name"
                  onKeyPress={(e) => e.key === 'Enter' && handleAddStudent()}
                />
                <Button onClick={handleAddStudent}>Add</Button>
              </div>
              <div className="space-y-2 max-h-60 overflow-y-auto">
                {students.map((student) => (
                  <div
                    key={student.id}
                    className="flex items-center justify-between p-2 bg-gray-50 rounded"
                  >
                    <span>{student.name}</span>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => removeStudent(student.id)}
                    >
                      Remove
                    </Button>
                  </div>
                ))}
                {students.length === 0 && (
                  <p className="text-sm text-gray-500 text-center py-4">
                    No students added yet
                  </p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Add Subjects */}
          <Card>
            <CardHeader>
              <CardTitle>Subjects</CardTitle>
              <CardDescription>Add subjects for the class</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2 mb-4">
                <Input
                  value={subjectName}
                  onChange={(e) => setSubjectName(e.target.value)}
                  placeholder="Subject name"
                  onKeyPress={(e) => e.key === 'Enter' && handleAddSubject()}
                />
                <Button onClick={handleAddSubject}>Add</Button>
              </div>
              <div className="space-y-2 max-h-60 overflow-y-auto">
                {subjects.map((subject) => (
                  <div
                    key={subject.id}
                    className="flex items-center justify-between p-2 bg-gray-50 rounded"
                  >
                    <span>{subject.name}</span>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => removeSubject(subject.id)}
                    >
                      Remove
                    </Button>
                  </div>
                ))}
                {subjects.length === 0 && (
                  <p className="text-sm text-gray-500 text-center py-4">
                    No subjects added yet
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Score Entry Table */}
        {students.length > 0 && subjects.length > 0 && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Enter Scores</CardTitle>
              <CardDescription>
                Enter CA and Exam scores for each student and subject
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto -mx-2 sm:mx-0">
                <div className="inline-block min-w-full align-middle">
                  <Table className="min-w-[800px]">
                    <TableHeader>
                      <TableRow>
                        <TableHead className="min-w-[150px] sticky left-0 bg-white z-10">Student</TableHead>
                        <TableHead className="min-w-[140px]">Subject</TableHead>
                        <TableHead className="min-w-[100px] text-center">CA</TableHead>
                        <TableHead className="min-w-[100px] text-center">Exam</TableHead>
                        <TableHead className="min-w-[90px] text-center">Total</TableHead>
                        <TableHead className="min-w-[90px] text-center">Grade</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {students.map((student) =>
                        subjects.map((subject, index) => {
                          const score = getScore(student.id, subject.id);
                          const ca = score?.ca || 0;
                          const exam = score?.exam || 0;
                          const total = calculateTotal(ca, exam);
                          const grade = calculateGrade(total);

                          return (
                            <TableRow key={`${student.id}-${subject.id}`}>
                              {index === 0 && (
                                <TableCell 
                                  rowSpan={subjects.length} 
                                  className="font-medium sticky left-0 bg-white z-10 border-r"
                                >
                                  {student.name}
                                </TableCell>
                              )}
                              <TableCell className="font-medium text-gray-700">{subject.name}</TableCell>
                              <TableCell className="p-2">
                                <Input
                                  type="number"
                                  min="0"
                                  max="100"
                                  value={ca === 0 ? '' : ca}
                                  onChange={(e) =>
                                    handleScoreChange(student.id, subject.id, 'ca', e.target.value)
                                  }
                                  className="w-full min-w-[80px] text-center"
                                  placeholder="CA"
                                />
                              </TableCell>
                              <TableCell className="p-2">
                                <Input
                                  type="number"
                                  min="0"
                                  max="100"
                                  value={exam === 0 ? '' : exam}
                                  onChange={(e) =>
                                    handleScoreChange(student.id, subject.id, 'exam', e.target.value)
                                  }
                                  className="w-full min-w-[80px] text-center"
                                  placeholder="Exam"
                                />
                              </TableCell>
                              <TableCell className="font-semibold text-center text-lg">{total}</TableCell>
                              <TableCell className="text-center">
                                <span
                                  className={`inline-block px-3 py-1 rounded text-sm font-semibold min-w-[45px] ${
                                    grade === 'A'
                                      ? 'bg-green-100 text-green-800'
                                      : grade === 'B'
                                      ? 'bg-blue-100 text-blue-800'
                                      : grade === 'C'
                                      ? 'bg-yellow-100 text-yellow-800'
                                      : grade === 'D'
                                      ? 'bg-orange-100 text-orange-800'
                                      : 'bg-red-100 text-red-800'
                                  }`}
                                >
                                  {grade}
                                </span>
                              </TableCell>
                            </TableRow>
                          );
                        })
                      )}
                    </TableBody>
                  </Table>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-4 md:hidden">
                💡 Tip: Scroll horizontally to view all columns
              </p>
            </CardContent>
          </Card>
        )}

        {/* Generate Results */}
        {students.length > 0 && subjects.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Generate Result PDFs</CardTitle>
              <CardDescription>
                Click on a student to generate and download their result sheet
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {students.map((student) => {
                  const result = getStudentResult(student.id);
                  if (!result) return null;

                  return (
                    <Card key={student.id} className="border-2">
                      <CardHeader>
                        <CardTitle className="text-lg">{student.name}</CardTitle>
                        <CardDescription>
                          {subjects.length} subject{subjects.length !== 1 ? 's' : ''}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <PDFGenerator result={result} />
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Reset Button */}
        {(students.length > 0 || subjects.length > 0) && (
          <div className="mt-8 flex justify-end">
            <Button
              variant="destructive"
              onClick={() => {
                if (confirm('Are you sure you want to reset all data?')) {
                  reset();
                }
              }}
            >
              Reset All Data
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
