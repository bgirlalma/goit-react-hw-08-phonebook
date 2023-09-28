import { useDispatch, useSelector } from 'react-redux';
import {LabelFilter, Wrapper, FilterInput} from './filterContacts.styled';
import { setFilter } from 'redux/filterSlice';
import { getFilters } from 'redux/selector';

export const FilterContacts = () => {
    const dispatch = useDispatch();
    const filter = useSelector(getFilters)
  
    const handleFilterChange = e => {
      dispatch(setFilter(e.target.value));
    };

    return (
        <div>
            <Wrapper>
            <LabelFilter htmlFor="filter"><span>Find contacts by name</span></LabelFilter> 
            <FilterInput type="text" name="filter" value={filter} onChange={handleFilterChange}/> 
            </Wrapper>

        </div>
        )
}