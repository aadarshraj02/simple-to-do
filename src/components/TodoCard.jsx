const TodoCard = (props) => {
  const { children } = props;
  return (
    <div>
      <li>
        {children}
        <div>
          <button>Update</button>
          <button>Delete</button>
        </div>
      </li>
    </div>
  );
};

export default TodoCard;
