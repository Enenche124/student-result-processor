import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Student Result Processing System
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Enter Scores and Generate Results
            </p>
            <Link href="/score-entry">
              <Button size="lg" className="text-lg px-8 py-6">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 gap-6 mt-16">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">📝</span>
                  Score Entry
                </CardTitle>
                <CardDescription>
                  Enter CA and Exam scores for students across multiple subjects
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Add students and subjects dynamically</li>
                  <li>• Real-time total and grade calculation</li>
                  <li>• Easy-to-use interface</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">🎓</span>
                  Auto Grading
                </CardTitle>
                <CardDescription>
                  Automatic grade calculation based on total scores
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• A: 90-100</li>
                  <li>• B: 80-89</li>
                  <li>• C: 70-79</li>
                  <li>• D: 60-69</li>
                  <li>• F: 0-59</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">📄</span>
                  PDF Generation
                </CardTitle>
                <CardDescription>
                  Export professional result sheets as PDF
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Generate individual student results</li>
                  <li>• Professional formatting</li>
                  <li>• Download instantly</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">💾</span>
                  No Backend Required
                </CardTitle>
                <CardDescription>
                  All data stored in browser memory
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Perfect for demo purposes</li>
                  <li>• No database setup needed</li>
                  <li>• Fast and responsive</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-2xl">Ready to Get Started?</CardTitle>
                <CardDescription className="text-base">
                  Click below to begin entering student scores and generating results
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/score-entry">
                  <Button size="lg" className="text-lg px-8">
                    Go to Score Entry
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
