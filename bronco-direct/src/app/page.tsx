import Link from 'next/link';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[var(--font-news-gothic-bold)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <ul className="list-inside text-sm text-center sm:text-left font-[var(--font-news-gothic-bold)]">
          <li className="mb-2">
            <Link href="/swap">
              <button>Swap Classes</button>
            </Link>
          </li>
          <li className="mb-2">
            <Link href="/add">
              <button>Add Classes</button>
            </Link>
          </li>
          <li className="mb-2">
            <Link href="/drop">
              <button>Drop Classes</button>
            </Link>
          </li>
          <li className="mb-2"> 
            <Link href="/search">
              <button>Search Classes</button>
            </Link>
          </li>
        </ul>
      </main>
    </div>
  );
}
