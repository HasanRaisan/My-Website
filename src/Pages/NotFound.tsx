import React from 'react'

const NotFound = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
  {/* Top Navigation Bar */}
  <header className="absolute top-0 left-0 right-0 z-10 p-4 sm:px-8 md:px-16 lg:px-24 xl:px-40">
          <div className="flex items-center gap-4 text-white">
            <a className="flex items-center gap-4" href="/home">
              <span className="material-symbols-outlined text-primary text-2xl">
                {" "}
                terminal{" "}
              </span>
              <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] font-mono">
                Hasan Raisan
              </h2>
            </a>
          </div>
  </header>
  {/* Main Content Container */}
  <main className="flex flex-1 items-center justify-center py-20 px-4">
    <div className="layout-content-container flex w-full max-w-2xl flex-col items-center justify-center text-center">
      {/* Large "404" Heading */}
      <h1 className="font-code text-7xl font-bold tracking-tighter text-gray-300 dark:text-gray-500 sm:text-8xl md:text-9xl">
        404
      </h1>
      {/* Error Message Text */}
      <h2 className="font-code mt-4 text-xl font-bold text-gray-800 dark:text-gray-100 sm:text-2xl md:text-3xl">
        <span className="text-gray-500 dark:text-gray-400">//</span> Error: Page
        Not Found
      </h2>
      {/* Apology/Helper Text */}
      <p className="mt-4 max-w-md text-base text-gray-600 dark:text-gray-400">
        Sorry, the page you are looking for does not exist. It might have been
        moved, deleted, or you may have mistyped the URL.
      </p>
      {/* Primary Call-to-Action (CTA) Button */}
      <div className="mt-8 flex justify-center">
        <a
          className="flex min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg bg-primary h-12 px-6 text-base font-bold text-white transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background-dark"
          href="/home"
        >
          <span className="material-symbols-outlined text-xl">home</span>
          <span className="truncate">Home</span>
        </a>
      </div>
    </div>
  </main>
</div>
  )
}

export default NotFound
