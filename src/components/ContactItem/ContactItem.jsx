import { DeleteBtn, ListItem } from "./ContactItem.styled";

export const Item = ({ name, number, id, onClick }) => {
    return (
      <ListItem>
        <span>
          {name}: {number}
        </span>
        <DeleteBtn onClick={() => onClick({ id, name, number })}>
          Delete
        </DeleteBtn>
      </ListItem>
    );
  };
