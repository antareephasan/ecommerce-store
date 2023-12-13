import { CategoryPage } from "./CategoryPage";

export const revalidate = 0;

export interface CategoryPageProps {
    params: {
        categoryId: string;
    },
    searchParams: {
        colorId: string;
        sizeId: string;
    }
}
export default CategoryPage