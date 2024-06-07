import { useId } from "react";
import style from "../SearchBox/SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/selectors";
import { changeFilter } from "../../redux/filtersSlice";

function SearchBox() {
  const finedId = useId();
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleFilter = (e) => {
    const name = e.target.value.trim();
    dispatch(changeFilter(name));
  };

  return (
    <div className={style.filter}>
      <label htmlFor={finedId}>Find contacts by name</label>
      <input
        className={style.filterInput}
        id={finedId}
        type="text"
        value={filter}
        onChange={handleFilter}
        name="name"
      />
    </div>
  );
}

export default SearchBox;
