import Image from 'next/image';
import Link from 'next/link';
import logoIcon from '@/public/favicon.svg';
import { GithubIcon } from 'lucide-react';

import { ThemeToggle } from './theme-toggle';
import { buttonVariants } from './ui/button';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-b-neutral-200 bg-white dark:border-b-neutral-700 dark:bg-neutral-900">
      <div className="container flex h-16 items-center justify-between space-x-4">
        <div className="flex gap-6 md:gap-10">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-2xl font-bold"
          >
            Museum Map
          </Link>
        </div>
        <div className="flex items-center justify-end space-x-4 ">
          <nav className="flex items-center space-x-1">
            <Link href="https://github.com" target="_blank" rel="noreferrer">
              <div
                className={buttonVariants({
                  size: 'sm',
                  variant: 'ghost',
                  className: 'text-neutral-700 dark:text-neutral-400',
                })}
              >
                <GithubIcon className="h-5 w-5" />
                <span className="sr-only">Github</span>
              </div>
            </Link>

            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
