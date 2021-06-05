export const fetcher = (url: string) => {
  const data = fetch(url).then((res) => res.json())
  return data
}
