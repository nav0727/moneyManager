/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/no-unknown-property */
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import TransactionItem from '../TransactionItem/index'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    title: '',
    total: 0,
    income: 0,
    text: 'Income',
    expen: 0,
    amount: '',
    amountList: [],
  }

  onAdd = event => {
    const {amount, title, text} = this.state

    const am = amount || 0

    const newTrans = {
      id: uuidv4(),
      title,
      amount: am,
      text,
      isDel: false,
    }
    event.preventDefault()

    this.setState(prev => ({
      amountList: [...prev.amountList, newTrans],
      title: '',
      amount: '',
      text: 'Income',
    }))
  }

  onTitle = event => {
    this.setState({title: event.target.value})
  }

  onAmount = event => {
    this.setState({amount: event.target.value})
  }

  onclickStatus = event => {
    this.setState({text: event.target.value})
  }

  onDeleteAmount = id => {
    const {amountList, isDel} = this.state

    this.setState(prev => ({
      appointList: prev.appointList.map(each => {
        if (id === each.id) {
          return {...each, isFavStar: !each.isFavStar}
        }
        return each
      }),
      isDel: !isDel,
    }))

    if (isDel) {
      return amountList.filter(each => each.isDel === true)
    }
    return amountList
  }

  render() {
    const {total, income, expen, title, amount, amountList} = this.state
    return (
      <div className="bg">
        <div className="bg1">
          <h1>Hi,Richard</h1>
          <p>Welcome back to your Money Manger</p>
        </div>
        <div className="bg2">
          <div className="col1 col">
            <img
              testid="balanceAmount"
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
              alt="balance"
            />
            <div>
              <p>Your balance</p>
              <p>Rs {total} </p>
            </div>
          </div>

          <div className="col2 col">
            <img
              testid="incomeAmount"
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
              alt="income"
            />
            <div>
              <p>Your Income</p>
              <p>Rs {income}</p>
            </div>
          </div>

          <div className="col3 col">
            <img
              testid="expensesAmount"
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
              alt="expenses"
            />
            <div>
              <p>Your Expenses</p>
              <p>Rs {expen} </p>
            </div>
          </div>
        </div>
        <div className="bg3">
          <div className="con1">
            <h1>Add Transaction</h1>
            <form className="list" onSubmit={this.onAdd}>
              <label htmlFor="textIn"> TITLE</label>
              <input
                type="text"
                id="textIn"
                placeholder="TITLE"
                value={title}
                onChange={this.onTitle}
              />

              <label htmlFor="amountIn"> AMOUNT</label>
              <input
                type="text"
                id="amountIn"
                placeholder="AMOUNT"
                onChange={this.onAmount}
                value={amount}
              />

              <label htmlFor="status">TYPE</label>
              <select id="status" onChange={this.onclickStatus}>
                <option value="Income">Income</option>
                <option value="Expenses"> Expenses</option>
              </select>

              <button type="submit" className="but">
                Add
              </button>
            </form>
          </div>
          <div className="con1">
            <h1> History</h1>

            <div className="det">
              <p>Title</p>
              <p>Amount</p>
              <p>Type </p>
              <p className="gap"> </p>
            </div>
            <ul>
              {amountList.map(each => (
                <TransactionItem
                  key={each.id}
                  detailsList={each}
                  onDelete={this.onDeleteAmount}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
