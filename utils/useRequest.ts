import useSWR from "swr"

const fetcher = url => fetch(url).then(res => res.json())
const baseUrl = process.env.CARBONZERO_API_DOMAIN || 'https://www.carbon-zero-dev.tk';

type Option = {
	page: number;
	size: number
}

export const UseGetProducts = (path: string, option: Option) => {
	if (!path) {
		throw new Error("Path is required")
	}
	const url = baseUrl + path + `?page=${option.page}&size=${option.size}`

	const { data, error } = useSWR(url, fetcher)
	const products = data?._embedded?.product_response_data_list || [];
	return { products, error }
}
