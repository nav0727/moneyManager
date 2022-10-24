/* eslint-disable react/no-unknown-property */
import './index.css'

const TransactionItem = props => {
  const {detailsList, onDeleteAmount} = props
  const {title, amount, text, id} = detailsList

  const onDelete = () => {
    onDeleteAmount(id)
  }

  return (
    <li className="constant">
      <div className="lis">
        <p> {title} </p>
        <p>{amount}</p>
        <p>{text}</p>
        <button
          type="button"
          className="btn"
          onClick={onDelete}
          testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
            className="bti"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
