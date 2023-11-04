export const Filter = ({filter, updateFilter}) => 
(<div>
    <label htmlFor="filter">Find contacts by name</label>
        <input type="text" name="filter" id="filter" value = {filter}
        onChange={event => updateFilter(event.target.value)} required />
</div>)