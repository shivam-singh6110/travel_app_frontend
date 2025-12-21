import axios from "axios";
import { useEffect, useState } from "react";
import { useCategory } from "../../context";
import "./Categories.css";

const PAGE_SIZE = 10;

export const Categories = () => {
  const [allCategories, setAllCategories] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const { setHotelCategory } = useCategory();

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        "https://travelo-app-8nn9.onrender.com/api/category"
      );

      const valid = data.filter(
        (item) => item.category || item.name
      );

      setAllCategories(valid);
    })();
  }, []);

  const visibleCategories = allCategories.slice(
    startIndex,
    startIndex + PAGE_SIZE
  );

  return (
    <section className="categories shadow">
      <button
        className="nav-btn"
        disabled={startIndex === 0}
        onClick={() => setStartIndex((p) => Math.max(p - PAGE_SIZE, 0))}
      >
        <span className="material-symbols-outlined">chevron_left</span>
      </button>

      <div className="categories-list">
        {visibleCategories.map(({ _id, category, name }) => (
          <span
            key={_id}
            className="category-chip"
            onClick={() => setHotelCategory(category ?? name)}
          >
            {category ?? name}
          </span>
        ))}
      </div>

      <button
        className="nav-btn"
        disabled={startIndex + PAGE_SIZE >= allCategories.length}
        onClick={() => setStartIndex((p) => p + PAGE_SIZE)}
      >
        <span className="material-symbols-outlined">chevron_right</span>
      </button>
    </section>
  );
};
