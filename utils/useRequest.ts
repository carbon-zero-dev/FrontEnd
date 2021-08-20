import useSWR from "swr"

const fetcher = url => fetch(url).then(res => res.json())
const baseUrl = process.env.CARBONZERO_API_DOMAIN || 'http://3.36.109.255:8080';

export const useGetProducts = path => {
	if (!path) {
		throw new Error("Path is required")
	}

	const url = baseUrl + path

	const { data: products, error } = useSWR(url, fetcher)

	return { products, error }
}
