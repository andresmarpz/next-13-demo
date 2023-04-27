import getCountry, { ICountry } from "~/lib/get-country"
import getTime, { ITime } from "~/lib/get-time"
import Country from "~/ui/country"

export async function getStaticProps() {
  const country = await getCountry("uruguay")
  const time = await getTime(country)

  return {
    props: {
      country,
      time,
    },
  }
}

export default function Home({
  country,
  time,
}: {
  country: ICountry
  time: ITime
}) {
  return (
    <main className="relative min-h-screen p-24">
      <div className="before:bg-gradient-radial after:bg-gradient-conic absolute left-1/2 top-1/2 mt-36 flex place-items-center before:absolute before:h-[300px] before:w-[880px] before:-translate-x-1/2 before:rounded-full before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[390px] after:-translate-x-1/2 after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]" />

      <div>
        <h2>Static Site Generation</h2>
        <Country country={country} time={time} />
      </div>
    </main>
  )
}
