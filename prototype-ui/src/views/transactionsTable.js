import _ from 'lodash'
import React from 'react'
import { Table } from 'semantic-ui-react'


let formatAddress = add =>{
  return add.street1 + ",\n" +  add.city +"  " +add.state + ",\n" + add.state
}



const originalData = require("../data/aqua.json")
const tableData = originalData.map((d) =>{
  let first, last, date, address, description, amount, type;

  first = d.entities.length && d.entities[0].names && d.entities[0].names.length ?
  d.entities[0].names[0].first : "" ;
  last = d.entities.length && d.entities[0].names && d.entities[0].names.length ?
  d.entities[0].names[0].last : "" ; 

  address = d.entities.length && d.entities[0].addresses && d.entities[0].addresses.length?
  formatAddress(d.entities[0].addresses[0]) : "";
  
  amount = d.tender && d.tender.amount? d.tender.amount : "";
  type= d.tender && d.tender.type? d.tender.type :"";
  
  description = d.tender && d.tender.card && d.tender.card.description;
  date = d.tender && d.tender.card && d.tender.card.authorization_datetime;
  return {first,last ,date, address, description, amount, type}
})



/**
 * https://react.semantic-ui.com/collections/table/#variations-sortable 
 */
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
            sorted={column === 'last' ? direction : null}
            onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'first' })}
          >
            Last
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
            <Table.Cell>{date}</Table.Cell>
            <Table.Cell>{amount}</Table.Cell>
            <Table.Cell>{description}</Table.Cell>
            <Table.Cell>{address}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}

export default TransactionsTable