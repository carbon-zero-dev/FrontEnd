import useSWR from "swr"

export const fetcher = url => fetch(url).then(res => res.json())
export const baseUrl = process.env.CARBONZERO_API_DOMAIN || 'https://www.carbon-zero.kr';
