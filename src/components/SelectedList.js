import React, { PropTypes } from 'react'
import Text from './Text'
import './SelectedList.css'

function renderText({id, text}) {
  return <Text key={id}>{text}</Text>;
}

function filterText(searchValue) {
    return ({text}) => text.includes(searchValue);
}

function SelectedList({ searchValue, list }) {
  return (
    <ul className="SelectedList">
      {list.length !== 0 ? list.filter(filterText(searchValue)).map(renderText): <Text>{"No Words Available"}</Text>}
    </ul>
  )
}

SelectedList.propTypes = {
   searchValue: PropTypes.string.isRequired,
   list: PropTypes.arrayOf(PropTypes.shape({
     id: PropTypes.number.isRequired,
     text: PropTypes.string.isRequired,
   })).isRequired,
}

export default SelectedList
