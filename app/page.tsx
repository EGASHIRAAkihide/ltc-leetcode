import { TableBody } from "./_components/Table/Body";
import { TableHead } from "./_components/Table/Head";
import { TopBar } from "./_components/TopBar/TopBar";
import { problemsData } from "./_mock/problems";
import { tableHeadData } from "./_mock/table-head";

export default function Home() {
  return (
    <main className='bg-dark-layer-2 min-h-screen'>
      <TopBar />
      <h1 className='text-2xl text-center text-gray-700 dark:text-gray-400 font-medium uppercase mt-10 mb-5'>
        &ldquo; QUALITY OVER QUALITY &rdquo;
      </h1>
      <div className='relative overflow-x-auto mx-auto px-6 pb-10'>
        <table className='text-sm text-left text-gray-500 dark:text-gray-400 sm:w-7/12 w-full max-w-[1200px] mx-auto'>
          <TableHead data={tableHeadData}/>
          <TableBody data={problemsData} />
        </table>
      </div>
    </main>
  )
}
