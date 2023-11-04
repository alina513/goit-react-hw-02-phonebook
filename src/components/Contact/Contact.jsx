export const Contact = ({value, onDelete}) => 
    (<li>{value.name}:{value.number}
    <button type="button" onClick={()=>onDelete(value.id)}>Delete</button>
    </li>);
