import { FaEdit, FaTrash } from "react-icons/fa";
function List({ list, removeItem, editItem }) {
    return (
        <div className="grocery-list">
            {list.map((item) => {
                const { id, title } = item;
                return (
                    <article key={id} className="grocery-item grocery-article">
                        <p className="grocery-title">{title}</p>
                        <div className="grocery-btn-container">
                            <button
                                className="edit-btn"
                                onClick={() => editItem(id)}
                            >
                                <FaEdit />
                            </button>
                            <button
                                className="delete-btn"
                                onClick={() => removeItem(id)}
                            >
                                <FaTrash />
                            </button>
                        </div>
                    </article>
                );
            })}
        </div>
    );
}

export default List;
