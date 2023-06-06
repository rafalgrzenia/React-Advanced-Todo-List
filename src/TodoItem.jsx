export function TodoItem({name}) {
  return (
    <li className="list-item">
      <label className="list-item-label">
        <input type="checkbox" data-list-item-checkbox />
        <span data-list-item-text>{name}</span>
      </label>
      <button data-button-edit>Edit</button>
      <button data-button-delete>Delete</button>
    </li>
  );
}
