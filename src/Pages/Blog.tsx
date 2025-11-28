import React from 'react'
import { Link } from 'react-router-dom'
const Blog = () => {
    return (
<div className="relative flex w-full flex-col group/design-root" id="top">
  <div className="layout-container flex h-full grow flex-col">
           <header className="p-7">
                <Link to ={`/home`}>
                <div className="flex items-center gap-3">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                    data-alt="Abstract gradient placeholder"
                    style={{
                      backgroundImage: 'url("/img/my-picture.png")'
                      }}
                  />
                  <div className="flex flex-col">
                    <h1 className="text-text-light text-base font-medium leading-normal">
                      Hasan Raisan
                    </h1>
                    <p className="text-text-light/70 text-sm font-normal leading-normal">
                      Full-Stack Web Developer
                    </p>
                  </div>
                </div>
                </Link>
            </header>

    <div className="flex flex-1">
      <aside className="w-full max-w-xs p-8 hidden xl:block">
        <div className="sticky top-8 flex h-full flex-col">
          <div className="flex flex-col gap-4">
            <nav className="flex flex-col gap-2 mt-4 border-l border-white/10">
              <a
                className="flex items-center gap-3 px-3 py-2 border-l-2 border-primary"
                href="#indexing"
              >
                <p className="text-primary text-sm font-medium leading-normal">
                  Indexing (Five Types)
                </p>
              </a>
              <a
                className="flex items-center gap-3 px-3 py-2 border-l-2 border-transparent hover:border-primary/50"
                href="#partitioning"
              >
                <p className="text-text-light/80 hover:text-text-light text-sm font-medium leading-normal">
                  Partitioning
                </p>
              </a>
              <a
                className="flex items-center gap-3 px-3 py-2 border-l-2 border-transparent hover:border-primary/50"
                href="#schema-migration"
              >
                <p className="text-text-light/80 hover:text-text-light text-sm font-medium leading-normal">
                  Schema Migration
                </p>
              </a>
              <a
                className="flex items-center gap-3 px-3 py-2 border-l-2 border-transparent hover:border-primary/50"
                href="#query-analysis"
              >
                <p className="text-text-light/80 hover:text-text-light text-sm font-medium leading-normal">
                  Query Analysis
                </p>
              </a>
              <a
                className="flex items-center gap-3 px-3 py-2 border-l-2 border-transparent hover:border-primary/50"
                href="#security"
              >
                <p className="text-text-light/80 hover:text-text-light text-sm font-medium leading-normal">
                  Security
                </p>
              </a>
              <a
                className="flex items-center gap-3 px-3 py-2 border-l-2 border-transparent hover:border-primary/50"
                href="#data-tracking"
              >
                <p className="text-text-light/80 hover:text-text-light text-sm font-medium leading-normal">
                  Data Tracking
                </p>
              </a>
              <a
                className="flex items-center gap-3 px-3 py-2 border-l-2 border-transparent hover:border-primary/50"
                href="#auditing"
              >
                <p className="text-text-light/80 hover:text-text-light text-sm font-medium leading-normal">
                  Auditing
                </p>
              </a>
              <a
                className="flex items-center gap-3 px-3 py-2 border-l-2 border-transparent hover:border-primary/50"
                href="#views"
              >
                <p className="text-text-light/80 hover:text-text-light text-sm font-medium leading-normal">
                  Views
                </p>
              </a>
            </nav>
          </div>
        </div>
      </aside>
      <main className="flex-1 min-w-0 max-w-4xl py-8 px-4 sm:px-8 mx-auto">
        <article className="layout-content-container flex flex-col gap-8">
          <header>
            <div className="flex flex-wrap justify-between gap-3">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-primary text-4xl font-black leading-tight tracking-[-0.033em]">
                  Advanced Database Concepts for Developers
                </p>
                <p className="text-text-light/80 text-base font-normal leading-normal">
                  A deep dive into indexing, partitioning, schema migration, and
                  more to optimize your database performance and security.
                </p>
              </div>
            </div>
          </header>
          <section id="indexing">
            <h2 className="text-primary text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Indexing (Five Types)
            </h2>
            <p className="text-text-light/90 text-base font-normal leading-normal pb-3 pt-1 px-4">
              Everyone knows the Index, but there are five types:
            </p>
            <div className="flex flex-col p-4">
              <details
                className="flex flex-col border-t border-t-white/10 py-2 group"
                
              >
                <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
                  <p className="text-text-light text-sm font-medium leading-normal">
                    Clustered Index
                  </p>
                  <span className="material-symbols-outlined text-text-light group-open:rotate-180 transition-transform">
                    expand_more
                  </span>
                </summary>
                <p className="text-text-light/70 text-sm font-normal leading-normal pb-2">
                  Usually created with the Primary Key and It is the fastest because it physically arranges (sorts) the rows inside the table.
                </p>
              </details>
              <details className="flex flex-col border-t border-t-white/10 py-2 group">
                <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
                  <p className="text-text-light text-sm font-medium leading-normal">
                    Non-Clustered Index
                  </p>
                  <span className="material-symbols-outlined text-text-light group-open:rotate-180 transition-transform">
                    expand_more
                  </span>
                </summary>
                <p className="text-text-light/70 text-sm font-normal leading-normal pb-2">
                  Creates a separate table containing keys that point to the original rows in the table.
                </p>
              </details>
              <details className="flex flex-col border-t border-t-white/10 py-2 group">
                <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
                  <p className="text-text-light text-sm font-medium leading-normal">
                    Full-text Index
                  </p>
                  <span className="material-symbols-outlined text-text-light group-open:rotate-180 transition-transform">
                    expand_more
                  </span>
                </summary>
                <p className="text-text-light/70 text-sm font-normal leading-normal pb-2">
                  Dedicated for searching within texts (such as searching in articles or long descriptions).
                </p>
              </details>
              <details className="flex flex-col border-t border-t-white/10 py-2 group">
                <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
                  <p className="text-text-light text-sm font-medium leading-normal">
                    Unique Index
                  </p>
                  <span className="material-symbols-outlined text-text-light group-open:rotate-180 transition-transform">
                    expand_more
                  </span>
                </summary>
                <p className="text-text-light/70 text-sm font-normal leading-normal pb-2">
                  Similar to Non-Clustered, but it prevents the duplication of values within the column.
                </p>
              </details>
              <details className="flex flex-col border-t border-t-white/10 py-2 group">
                <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
                  <p className="text-text-light text-sm font-medium leading-normal">
                    Covering Index
                  </p>
                  <span className="material-symbols-outlined text-text-light group-open:rotate-180 transition-transform">
                    expand_more
                  </span>
                </summary>
                <p className="text-text-light/70 text-sm font-normal leading-normal pb-2">
                 Contains all the columns required in the query, so it does not need to return to the original table (i.e., without Lookup).
                </p>
                <p className="text-text-light/70 text-sm font-normal leading-normal pb-2">
                For example, if you have a table containing Name and Phone Number, and your query searches for the Number using the Name: <br />If the index is only on the Name, it must return to the original table to fetch the Number. However, if the index is on the Name + Number, it will return the result directly.
                </p>
              </details>
              <p className="pt-4 text-text-light text-sm font-medium leading-normal">
                    Note: The Binary Search algorithm is used inside the indexes to reach the required row in the original table.
                  </p>
            </div>
          </section>
          <section id="partitioning">
            <h2 className="text-primary text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Partitioning
            </h2>
            <p className="text-text-light/90 text-base font-normal leading-normal pb-3 pt-1 px-4">
            Concept: Dividing large tables into non-visible parts (for example, based on the Year). <br />Benefit: Speeds up queries that search within a specific period, in addition to facilitating data management (you delete a Partition instead of millions of rows). <br /> Usage: Used in massive tables (Banks, Telecom companies).
            </p>
          </section>
          <section id="schema-migration">
            <h2 className="text-primary text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Schema Migration
            </h2>
            <p className="text-text-light/90 text-base font-normal leading-normal pb-3 pt-1 px-4">
              Tools like Flyway and Liquibase are used to organize and execute database changes (migrations) securely and in a controlled manner.
            </p>
          </section>
          <section id="query-analysis">
            <h2 className="text-primary text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Query Analysis
            </h2>
            <p className="text-text-light/90 text-base font-normal leading-normal pb-3 pt-1 px-4">
            The Query Store feature in SQL Server helps to analyze query performance and identify the most consuming queries.
            </p>
          </section>
          <section id="security">
            <h2 className="text-primary text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Security
            </h2>
            <p className="text-text-light/90 text-base font-normal leading-normal pb-3 pt-1 px-4">
                - Hash + Salt + Iteration to securely store passwords. <br /> - Always Encrypted to protect sensitive data inside the database (the data itself).
            </p>
          </section>
          <section id="data-tracking">
            <h2 className="text-primary text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Data Tracking
            </h2>
            <p className="text-text-light/90 text-base font-normal leading-normal pb-3 pt-1 px-4">
            To track changes on rows: <br /> - Change Data Capture (CDC) <br /> - Temporal Tables (System-Versioned) to save the history of data and the changes that occurred to it.

            </p>
          </section>
          <section id="auditing">
            <h2 className="text-primary text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Auditing
            </h2>
            <p className="text-text-light/90 text-base font-normal leading-normal pb-3 pt-1 px-4">
              The SQL Server Audit feature to record sensitive operations and track who performed them and when.
            </p>
          </section>
          <section id="views">
            <h2 className="text-primary text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Views
            </h2>
            <p className="text-text-light/90 text-base font-normal leading-normal pb-3 pt-1 px-4">
              To display data from multiple tables without copying it: <br /> - Normal View <br /> - Materialized View: Physically stores the data for faster access during large queries.
            </p>
          </section>
        </article>
      </main>
    </div>
           <footer className="border-t border-gray-200 dark:border-[#282e39] mt-auto px-4 md:px-10 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © 2025 Hasan Raisan. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400">
              <a
                className="hover:text-primary transition-colors"
                data-alt="GitHub Profile"
                  href="https://github.com/HasanRaisan"
                  target="_blank"
                  rel="noopener noreferrer"
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
                href="https://www.linkedin.com/in/hasan-raisan-949b84241/"
                target="_blank"
                rel="noopener noreferrer"
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
)
}

export default Blog
