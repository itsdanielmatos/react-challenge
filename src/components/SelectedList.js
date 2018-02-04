import React from 'react'
import PropTypes from 'prop-types'
import Text from './Text'
import './SelectedList.css'


const SelectedList = ({searchValue, list, fuse}) => {
  const generateList = () => {
    if(list.length){
      var filteredList = searchValue ? fuse.search(searchValue) : list;
      if(!filteredList.length){
        return <Text>{'No results match your search'}</Text>;
      }
      return filteredList.map((listItem) => {
        return listItem.item ? (<Text key={listItem.item.id} score={listItem.score}>{listItem.item.text}</Text>) : (<Text key={listItem.id}>{listItem.text}</Text>);
      });
    }
    return <Text>{'Search Unavailable'}</Text>;
    };

  return (
    <ul className='SelectedList'>
      {generateList()}
    </ul>
  )
}

SelectedList.propTypes = {
   fuse: PropTypes.object.isRequired,
   searchValue: PropTypes.string.isRequired,
   list: PropTypes.arrayOf(PropTypes.shape({
     id: PropTypes.number.isRequired,
     text: PropTypes.string.isRequired,
   })).isRequired,
}

export default SelectedList;
