// Write your code here
import './index.css'

const TodoItem = props => {
  const {todo, deleteTodo} = props
  const {title, id} = todo

  const oneleteTodo = () => {
    deleteTodo(id)
  }

  return (
    <li className="todo">
      <p>{title}</p>
      <button type="button" onClick={oneleteTodo}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
