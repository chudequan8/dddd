namespace PagesType {
	type Pages = Page[]

	type Page = {
		to: string;
		text: string;
		icon: string;
		subPages?: Pages
		iconClassName?: string
	}
}
