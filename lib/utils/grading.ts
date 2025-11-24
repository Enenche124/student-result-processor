// Utility functions for grade calculation and result processing

import { Grade } from '@/lib/types';

/**
 * Calculate grade based on total score
 * 90-100: A
 * 80-89: B
 * 70-79: C
 * 60-69: D
 * 0-59: F
 */
export function calculateGrade(total: number): Grade {
  if (total >= 90 ) return 'A';
  if (total >= 80 && total < 90) return 'B';
  if (total >= 70 && total < 80) return 'C';
  if (total >= 60 && total < 70) return 'D';
  return 'F';
}

/**
 * Calculate total score from CA and Exam
 */
export function calculateTotal(ca: number, exam: number): number {
  return ca + exam;
}

/**
 * Validate score input (0-100 range)
 */
export function isValidScore(score: number): boolean {
  return score >= 0 && score <= 100;
}

/**
 * Format date for result sheet
 */
export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
