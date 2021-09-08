interface ICategory {
	"id": number,
	"name": string,
	"code_name": string,
	"is_active": boolean,
	"sub_category_list": ICategory[]
}

export default ICategory;
