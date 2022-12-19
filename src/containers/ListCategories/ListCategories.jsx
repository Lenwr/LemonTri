import { HomeCategory } from "../../components";

import "./listCategories.css";

const ListCategories = ({ data }) => (
    <div className="list-categories">
        {
            data && data.map(
                (category, index) => <HomeCategory
                    key={index}
                    image={category?.image}
					url={category?.url}
                />
            )
        }
    </div>
);

export default ListCategories;
