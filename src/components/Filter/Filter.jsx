import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';
import { FilterStyle, FilterText, Input } from './filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const inputFilterShift = evt => {
    const { value } = evt.target;
    dispatch(filterContact(value));
  };
  return (
    <FilterStyle>
      <FilterText>Find contact by name</FilterText>
      <Input
        name="filter"
        value={filter}
        type="text"
        placeholder="Search contacs"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        onChange={inputFilterShift}
      />
    </FilterStyle>
  );
};
