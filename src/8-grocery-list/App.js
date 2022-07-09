import { useState, useEffect, useCallback } from "react";
import List from "./List";

import "./index.css";
import Alert from "./Alert";

const getLocalStorage = () => {
    const list = localStorage.getItem("list");
    if (list) {
        return JSON.parse(list);
    } else {
        return [];
    }
};

function App() {
    const [name, setName] = useState("");
    const [list, setList] = useState(getLocalStorage);
    const [isEditting, setIsEditting] = useState(false);
    const [editId, setEditId] = useState(null);
    const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        setName("");
        if (!name) {
            showAlert(true, "Please enter value", "danger");
        } else if (name && isEditting) {
            setList(
                list.map((item) => {
                    if (item.id === editId) {
                        return {
                            id: new Date().getTime().toString(),
                            title: name,
                        };
                    }
                    return item;
                })
            );
            showAlert(true, "item editted", "success");
            setIsEditting(false);
            setEditId(null);
        } else {
            const newItem = {
                id: new Date().getTime().toString(),
                title: name,
            };
            setList([...list, newItem]);
            showAlert(true, "item added", "success");
        }
    };

    const showAlert = (show = false, msg = "", type = "") => {
        setAlert({ show, msg, type });
    };

    const clearList = () => {
        showAlert(true, "empty list", "danger");
        setList([]);
    };

    const removeItem = useCallback(
        (id) => {
            showAlert(true, "item removed", "danger");
            setList(list.filter((item) => item.id !== id));
        },
        [list]
    );

    const editItem = (id) => {
        const specificItem = list.find((item) => item.id === id);
        setName(specificItem.title);
        setIsEditting(true);
        setEditId(id);
    };

    useEffect(() => {
        localStorage.setItem("list", JSON.stringify(list));
    }, [list]);

    return (
        <section className="grocery-main-container">
            <form className="grocery-form" onSubmit={handleSubmit}>
                {alert.show && (
                    <Alert {...alert} removeAlert={showAlert} list={list} />
                )}
                <h3>grocery app</h3>
                <div className="grocery-form-control">
                    <input
                        type="text"
                        placeholder="e.g. eggs"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <button type="submit" className="submit-btn">
                        {isEditting ? "edit" : "add"}
                    </button>
                </div>
            </form>
            {list.length > 0 && (
                <div className="grocery-container">
                    <List
                        removeItem={removeItem}
                        list={list}
                        editItem={editItem}
                    />
                    <button className="clear-btn" onClick={clearList}>
                        clear items
                    </button>
                </div>
            )}
        </section>
    );
}

export default App;
