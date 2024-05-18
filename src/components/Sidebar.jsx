import { FaListUl } from "react-icons/fa";
import { createQueryObject } from "../helper/Helper";

import styles from "./Sidebar.module.css";

const categories = [
  { id: 1, type: "All" },
  { id: 2, type: "Electronics" },
  { id: 3, type: "Jewelery" },
  { id: 4, type: "Men's Clothing" },
  { id: 5, type: "Women's Clothing" },
];
const Sidebar = ({ query, setQuery }) => {
  const categoryHandler = (event) => {
    const { tagName } = event.target;
    const category = event.target.innerText.toLowerCase();
    if (tagName !== "LI") return;
    setQuery((query) => createQueryObject(query, { category }));
  };
  return (
    <div className={styles.sidebar}>
      <div>
        <FaListUl />
        <p>Categories</p>
      </div>
      <ul onClick={categoryHandler}>
        <li>All</li>
        <li
          className={query.category === "electronics" ? styles.selected : null}
        >
          Electronics
        </li>
        <li className={query.category === "jewelery" ? styles.selected : null}>
          Jewelery
        </li>
        <li
          className={
            query.category === "men's clothing" ? styles.selected : null
          }
        >
          Men's Clothing
        </li>
        <li
          className={
            query.category === "women's clothing" ? styles.selected : null
          }
        >
          Women's Clothing
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
