export default function CountryPlaceholder() {
  return (
    <div className="flex w-56 flex-col items-center rounded border border-gray-700 bg-gray-700 bg-opacity-20 p-3">
      <div className="h-[80px] w-[120px] animate-pulse rounded bg-gray-700" />
      <div className="mt-4 flex w-full flex-col gap-1">
        <div className="h-[22px] w-full animate-pulse rounded bg-gray-700" />
        <div className="h-[22px] w-full animate-pulse rounded bg-gray-700" />
      </div>
    </div>
  )
}
