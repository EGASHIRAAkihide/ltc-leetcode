type Props = {
  data: string[];
}

export function TableHead({
  data
}: Props) {
  return (
    <thead className='text-xs text-gray-700 uppercase dark:text-gray-400 border-b'>
      <tr>
        {data.map((d, index) => (
          <th scope='col' className='px-1 py-3 w-0 font-medium' key={index}>{d}</th>
        ))}
      </tr>
    </thead>
  )
}
