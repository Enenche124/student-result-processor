// PDF Generator component for student results

'use client';

import jsPDF from 'jspdf';
import { StudentResult } from '@/lib/types';
import { formatDate } from '@/lib/utils/grading';
import { Button } from '@/components/ui/button';

interface PDFGeneratorProps {
  result: StudentResult;
}

export function PDFGenerator({ result }: PDFGeneratorProps) {
  const generatePDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    let yPosition = 20;

    // School Name
    doc.setFontSize(18);
    doc.setFont('helvetica', 'bold');
    doc.text(result.classInfo.schoolName.toUpperCase(), pageWidth / 2, yPosition, {
      align: 'center',
    });
    yPosition += 10;

    // Result Sheet Title
    doc.setFontSize(14);
    doc.text('STUDENT RESULT SHEET', pageWidth / 2, yPosition, {
      align: 'center',
    });
    yPosition += 15;

    // Student and Class Information
    doc.setFontSize(11);
    doc.setFont('helvetica', 'normal');
    doc.text(`Student Name: ${result.student.name}`, 20, yPosition);
    yPosition += 7;
    doc.text(`Class: ${result.classInfo.className}`, 20, yPosition);
    yPosition += 7;
    doc.text(`Term: ${result.classInfo.term}`, 20, yPosition);
    doc.text(`Session: ${result.classInfo.session}`, 120, yPosition);
    yPosition += 15;

    // Table Header
    doc.setFont('helvetica', 'bold');
    doc.text('Subject', 20, yPosition);
    doc.text('CA', 80, yPosition);
    doc.text('Exam', 105, yPosition);
    doc.text('Total', 130, yPosition);
    doc.text('Grade', 160, yPosition);
    yPosition += 2;

    // Draw line under header
    doc.line(20, yPosition, 190, yPosition);
    yPosition += 7;

    // Table Content
    doc.setFont('helvetica', 'normal');
    result.scores.forEach((score) => {
      if (yPosition > 270) {
        doc.addPage();
        yPosition = 20;
      }

      doc.text(score.subject.name, 20, yPosition);
      doc.text(score.ca.toString(), 80, yPosition);
      doc.text(score.exam.toString(), 105, yPosition);
      doc.text(score.total.toString(), 130, yPosition);
      doc.text(score.grade, 160, yPosition);
      yPosition += 7;
    });

    // Draw line after table
    yPosition += 5;
    doc.line(20, yPosition, 190, yPosition);
    yPosition += 20;

    // Grading System
    yPosition += 10;
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text('Grading System:', 20, yPosition);
    yPosition += 6;
    doc.setFont('helvetica', 'normal');
    doc.text('A: 90-100  |  B: 80-89  |  C: 70-79  |  D: 60-69  |  F: 0-59', 20, yPosition);

    // Signature Section
    yPosition += 20;
    doc.line(20, yPosition, 80, yPosition);
    doc.line(130, yPosition, 190, yPosition);
    yPosition += 5;
    doc.setFontSize(9);
    doc.text("Class Teacher's Signature", 20, yPosition);
    doc.text("Principal's Signature", 130, yPosition);

    // Footer
    yPosition = doc.internal.pageSize.getHeight() - 15;
    doc.setFontSize(8);
    doc.setTextColor(128, 128, 128);
    doc.text(`Generated on ${formatDate(new Date())}`, pageWidth / 2, yPosition, {
      align: 'center',
    });

    // Save PDF
    const fileName = `${result.student.name.replace(/\s+/g, '_')}_Result.pdf`;
    doc.save(fileName);
  };

  return (
    <Button onClick={generatePDF} className="w-full">
      Download PDF
    </Button>
  );
}
