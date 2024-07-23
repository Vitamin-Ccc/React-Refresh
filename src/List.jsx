import PropTypes from "prop-types"


function List(props) {

  const category = props.category
  const itemList = props.items

  const listItems = itemList.map(
    (item) => 
      <li key={item.id}>
        {item.name}: &nbsp;
        <b>{item.calories}</b>
      </li>
  )

  // const fruits = [{ id: 1, name: "watermelon", calories: 85},
  //                 { id: 2, name: "mango", calories: 201},
  //                 { id: 3, name: "cantaloupe", calories: 186},
  //                 { id: 4, name: "peach", calories: 50},
  //                 { id: 5, name: "cherry", calories: 77}]
  
  // Sort by Alphabetical
  // fruits.sort((a,b)=> a.name.localeCompare(b.name))
  // Sort by Reversed Alphabetical
  // fruits.sort((a,b)=> b.name.localeCompare(a.name))
  // Sort by Numeric
  // fruits.sort((a,b)=> a.calories - b.calories)
  // Sort by Reversed Numeric
  // fruits.sort((a,b)=> b.calories - a.calories)

  // Find low cal fruits
  // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100)

  // Find high cal fruits
  // const highCalFruits = fruits.filter(fruit => fruit.calories >= 100)

  // Render list of all fruits
  // const listItems = fruits.map(
  //   (fruit) => 
  //     <li key={fruit.id}>
  //       {fruit.name}: &nbsp;
  //       <b>{fruit.calories}</b>
  //     </li>
  // )

  // Render list of lowcalfruits
  // const listItems = lowCalFruits.map(
  //   (lowCalFruit) => 
  //     <li key={lowCalFruit.id}>
  //       {lowCalFruit.name}: &nbsp;
  //       <b>{lowCalFruit.calories}</b>
  //     </li>
  // )

  // Render list of highcalfruits
  // const listItems = highCalFruits.map(
  //   (highCalFruit) => 
  //     <li key={highCalFruit.id}>
  //       {highCalFruit.name}: &nbsp;
  //       <b>{highCalFruit.calories}</b>
  //     </li>
  // )

  return(
    <>
      <h3 className="list-category">{category}</h3>
      <ol className="list-items">{listItems}</ol>
    </>
  )
}

List.propTypes = {
  category: PropTypes.string,
  // Has an array of objects
  items: PropTypes.arrayOf(
    // Use the shape method to define data type
    PropTypes.shape({
      // Each object has its own data type
      id: PropTypes.number,
      name: PropTypes.string,
      calories: PropTypes.number
    })
  )
}

List.defaultProps = {
  category: "Category",
  items: [],
}

export default List