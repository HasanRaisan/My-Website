import React, { useState, useEffect } from 'react';

const Experience = () => {

    const [showScrollBtn, setShowScrollBtn] = useState(false);

    useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollBtn(true);
      } else {
        setShowScrollBtn(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
  <div className="flex h-full grow flex-col">
    <div className="px-4 sm:px-8 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
      <div className="flex flex-col w-full max-w-[960px] flex-1">
        <header className="py-5">
          <a
            className="inline-flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200 dark:bg-[#282e39] dark:text-gray-300 dark:hover:bg-[#343a46]"
            href="#"
          >
            <span className="material-symbols-outlined text-base">
              arrow_back
            </span>
            <span>Back to Learning Journey</span>
          </a>
        </header>
        <main className="flex-grow pt-10 pb-20">
          <div className="flex flex-wrap justify-between gap-3 p-4">
            <div className="flex w-full flex-col gap-3">
              <p className="text-4xl font-black leading-tight tracking-[-0.033em] text-gray-900 dark:text-white">
                Programming Fundamentals &amp; C++ (Part One)
              </p>
              <p className="text-base font-normal leading-normal text-gray-500 dark:text-[#9da6b9]">
                A comprehensive journey into advanced computing concepts,
                software engineering principles, and data structures. This
                program provided a strong theoretical and practical foundation
                for building complex, scalable applications.
              </p>
            </div>
          </div>
          <div className="px-4 pt-12">
            <div className="relative">
              <div className="absolute left-4 top-2 h-[calc(100%-20px)] md:h-full w-0.5 bg-gray-700 md:left-1/2 md:-translate-x-1/2" />
              {/* main */}
              {/* righy */}
              <div className="relative mb-12 md:flex md:items-center">
                <div className="absolute left-4 top-0.5 md:top-1.5 size-4 -translate-x-1/2 rounded-full bg-primary ring-8 ring-background-light dark:ring-background-dark md:left-1/2 md:-translate-x-1/2" />
                <div className="flex-1 md:pr-8">
                  <div className="md:text-right">
                    <p className="pl-8 md:pl-0 font-mono text-sm text-gray-500 dark:text-gray-400">
                      June 2023
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex-1 md:mt-0 md:pl-8">
                  <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-[#1A1D23]">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      Structured Programming
                    </h3>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                      Mastering C++ fundamentals, from basic syntax to complex
                      data structures and algorithms.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-4">
                      <a
                        className="flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                        href="#"
                      >
                        <span className="material-symbols-outlined text-base">
                          link
                        </span>{" "}
                        Course
                      </a>
                      <a
                        className="flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                        href="#"
                      >
                        <span className="material-symbols-outlined text-base">
                          workspace_premium
                        </span>{" "}
                        Certificate
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* left */}
              <div className="relative mb-12 md:flex md:flex-row-reverse md:items-center">
                <div className="absolute left-4 top-0.5 md:top-1.5 size-4 -translate-x-1/2 rounded-full bg-primary ring-8 ring-background-light dark:ring-background-dark md:left-1/2 md:-translate-x-1/2" />
                <div className="flex-1 md:pl-8">
                  <div className="md:text-left">
                    <p className="pl-8 md:pl-0 font-mono text-sm text-gray-500 dark:text-gray-400">
                      August 2023
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex-1 md:mt-0 md:pr-8">
                  <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-[#1A1D23]">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      Object-Oriented Programming (OOP)
                    </h3>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                      Exploring encapsulation, inheritance, and polymorphism to
                      build modular and reusable code.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-4">
                      <a
                        className="flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                        href="#"
                      >
                        <span className="material-symbols-outlined text-base">
                          link
                        </span>{" "}
                        Course
                      </a>
                      <a
                        className="flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                        href="#"
                      >
                        <span className="material-symbols-outlined text-base">
                          workspace_premium
                        </span>{" "}
                        Certificate
                      </a>
                    </div>
                  </div>
                </div>
              </div>


              {/* righy */}
              <div className="relative mb-12 md:flex md:items-center">
                <div className="absolute left-4 top-0.5 md:top-1.5 size-4 -translate-x-1/2 rounded-full bg-primary ring-8 ring-background-light dark:ring-background-dark md:left-1/2 md:-translate-x-1/2" />
                <div className="flex-1 md:pr-8">
                  <div className="md:text-right">
                    <p className="pl-8 md:pl-0 font-mono text-sm text-gray-500 dark:text-gray-400">
                      June 2023
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex-1 md:mt-0 md:pl-8">
                  <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-[#1A1D23]">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      Structured Programming
                    </h3>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                      Mastering C++ fundamentals, from basic syntax to complex
                      data structures and algorithms.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-4">
                      <a
                        className="flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                        href="#"
                      >
                        <span className="material-symbols-outlined text-base">
                          link
                        </span>{" "}
                        Course
                      </a>
                      <a
                        className="flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                        href="#"
                      >
                        <span className="material-symbols-outlined text-base">
                          workspace_premium
                        </span>{" "}
                        Certificate
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* left */}
              <div className="relative mb-12 md:flex md:flex-row-reverse md:items-center">
                <div className="absolute left-4 top-0.5 md:top-1.5 size-4 -translate-x-1/2 rounded-full bg-primary ring-8 ring-background-light dark:ring-background-dark md:left-1/2 md:-translate-x-1/2" />
                <div className="flex-1 md:pl-8">
                  <div className="md:text-left">
                    <p className="pl-8 md:pl-0 font-mono text-sm text-gray-500 dark:text-gray-400">
                      August 2023
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex-1 md:mt-0 md:pr-8">
                  <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-[#1A1D23]">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      Object-Oriented Programming (OOP)
                    </h3>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                      Exploring encapsulation, inheritance, and polymorphism to
                      build modular and reusable code.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-4">
                      <a
                        className="flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                        href="#"
                      >
                        <span className="material-symbols-outlined text-base">
                          link
                        </span>{" "}
                        Course
                      </a>
                      <a
                        className="flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                        href="#"
                      >
                        <span className="material-symbols-outlined text-base">
                          workspace_premium
                        </span>{" "}
                        Certificate
                      </a>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </main>
        <footer className="border-t border-gray-200 dark:border-[#282e39] mt-auto px-4 md:px-10 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © 2024 Developer Portfolio. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400">
              <a
                className="hover:text-primary transition-colors"
                data-alt="GitHub Profile"
                href="#"
              >
                <svg
                  fill="none"
                  height={24}
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  width={24}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
              <a
                className="hover:text-primary transition-colors"
                data-alt="LinkedIn Profile"
                href="#"
              >
                <svg
                  fill="none"
                  height={24}
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  width={24}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect height={12} width={4} x={2} y={9} />
                  <circle cx={4} cy={4} r={2} />
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </div>
  <button
          className={`fixed bottom-6 right-6 z-50 w-12 h-12 flex items-center justify-center bg-primary/80 text-white rounded-full border border-white/10 shadow-lg transition-all duration-300 ease-in-out ${showScrollBtn ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
          onClick={scrollToTop}
          aria-label="Scroll to top"
      >
          <span className="material-symbols-outlined"> arrow_upward </span>
      </button>
</div>
  )
}

export default Experience
