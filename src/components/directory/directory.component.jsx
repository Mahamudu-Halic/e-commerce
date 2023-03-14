
import Categories from "../categories/categories";

import CategoryItem from "../category-item/category-item.component";

import './directory.styles.scss'

const Directory = () => {
    return(
    <div className="directory-container">
    {
        Categories.map((category) => (
        <CategoryItem key={category.id} category={category}/>
        )
        )
    }
    </div>
    )
}

export default Directory;