import { useDispatch } from 'react-redux';
import css from './SearchBox.module.css';
import { changeFilter } from '../../redux/filtersSlice';

export default function SearchBox({ value }) {
  const dispatch = useDispatch();

  const onFindContact = value => {
    dispatch(changeFilter(value));
  };
  return (
    <div className={css.container}>
      <label htmlFor="findContact">Find contacts by name</label>
      <input
        className={css.searchBoxInput}
        type="text"
        value={value}
        onChange={event => onFindContact(event.target.value)}
        id="findContact"
      />
    </div>
  );
}
