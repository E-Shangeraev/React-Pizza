import React from 'react'
import uuid from 'react-uuid'
import PropTypes from 'prop-types'

const Categories = React.memo(function Categories({
  activeCategory,
  items,
  onClickCategory,
}) {
  return (
    <div className="categories">
      <ul>
        <li
          className={activeCategory === null ? 'active' : ''}
          onClick={() => onClickCategory(null)}>
          Все
        </li>
        {items &&
          items.map((name, index) => (
            <li
              className={activeCategory === index ? 'active' : ''}
              onClick={() => onClickCategory(index)}
              key={uuid()}>
              {name}
            </li>
          ))}
      </ul>
    </div>
  )
})

Categories.propTypes = {
  activeCategory: PropTypes.number,
  items: PropTypes.arrayOf(PropTypes.string.isRequired),
  onClickCategory: PropTypes.func.isRequired,
}

Categories.defaultProps = {
  activeCategory: null,
  items: [],
}

export default Categories

// class Categories extends React.Component {
//   state = {
//     activeItem: 3,
//   };

//   onSelectItem = (index) => {
//     this.setState({
//       activeItem: index,
//     });
//   };

//   render() {
//     const { items, click } = this.props;

//     return (
//       <div className="categories">
//         <ul>
//           <li>Все</li>
//           {items.map((name, index) => (
//             <li
//               className={this.state.activeItem === index ? 'active' : ''}
//               onClick={() => this.onSelectItem(index)}
//               key={uuid()}>
//               {name}
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }
