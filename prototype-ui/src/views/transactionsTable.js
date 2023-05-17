import _ from 'lodash'
import React from 'react'
import { Table } from 'semantic-ui-react'

const tableData = [
  { name: 'John', age: 15, gender: 'Male' },
  { name: 'Amber', age: 40, gender: 'Female' },
  { name: 'Leslie', age: 25, gender: 'Other' },
  { name: 'Ben', age: 70, gender: 'Male' },
]

let t = {
    names:"", address:"", description:"", amount:"", type:"", date:""
}

function exampleReducer(state, action) {
  switch (action.type) {
    case 'CHANGE_SORT':
      if (state.column === action.column) {
        return {
          ...state,
          data: state.data.slice().reverse(),
          direction:
            state.direction === 'ascending' ? 'descending' : 'ascending',
        }
      }

      return {
        column: action.column,
        data: _.sortBy(state.data, [action.column]),
        direction: 'ascending',
      }
    default:
      throw new Error()
  }
}

function TransactionsTable() {
  const [state, dispatch] = React.useReducer(exampleReducer, {
    column: null,
    data: tableData,
    direction: null,
  })
  const { column, data, direction } = state

  return (
    <Table sortable celled fixed>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell
            sorted={column === 'first' ? direction : null}
            onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'first' })}
          >
            First
          </Table.HeaderCell>
          <Table.HeaderCell
            sorted={column === 'date' ? direction : null}
            onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'date' })}
          >
            Date
          </Table.HeaderCell>
          <Table.HeaderCell
            sorted={column === 'amount' ? direction : null}
            onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'amount' })}
          >
            Amount
          </Table.HeaderCell>
          <Table.HeaderCell
            sorted={column === 'description' ? direction : null}
            onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'description' })}
          >
            Description
          </Table.HeaderCell>
          
          <Table.HeaderCell
            sorted={column === 'address' ? direction : null}
            onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'address' })}
          >
            address
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {data.map(({ id, first, last, amount, date, description, address }) => (
          <Table.Row key={id}>
            <Table.Cell>{first}</Table.Cell>
            <Table.Cell>{last}</Table.Cell>
            <Table.Cell>{amount}</Table.Cell>
            <Table.Cell>{date}</Table.Cell>
            <Table.Cell>{description}</Table.Cell>
            <Table.Cell>{address}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}

export default TransactionsTable