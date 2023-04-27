import getTime from "~/lib/get-time"

export async function GET(req: Request, res: Response) {
  const url = new URL(req.url)
  const lat = url.searchParams.get("lat")
  const lon = url.searchParams.get("lon")

  const response = await getTime(
    { lat: lat ? parseFloat(lat) : 0, lon: lon ? parseFloat(lon) : 0 },
    {
      cache: "no-store",
    }
  )
  return new Response(JSON.stringify(response))
}
