// Header component for navigation

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';

export function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b bg-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              Student Result Processor
            </Link>
            <nav className="hidden md:flex space-x-4">
              <Link href="/">
                <Button
                  variant={pathname === '/' ? 'default' : 'ghost'}
                  className="font-medium"
                >
                  Home
                </Button>
              </Link>
              <Link href="/score-entry">
                <Button
                  variant={pathname === '/score-entry' ? 'default' : 'ghost'}
                  className="font-medium"
                >
                  Score Entry
                </Button>
              </Link>
            </nav>
          </div>
          <div className="text-sm text-gray-600">
            Demo Version
          </div>
        </div>
      </div>
    </header>
  );
}
