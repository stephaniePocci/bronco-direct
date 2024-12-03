export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[var(--font-news-gothic-bold)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <ul className="list-inside text-sm text-center sm:text-left font-[var(--font-news-gothic-bold)]">
          <li className="mb-2">
            <button>Swap Classes</button>
          </li>
          <li className="mb-2">
            <button>Add Classes</button>
          </li>
          <li className="mb-2">
            <button>Drop Classes</button>
          </li>
          <li className="mb-2"> 
            <button>Search Classes</button>
          </li>
        </ul>
      </main>
    </div>
  );
}
