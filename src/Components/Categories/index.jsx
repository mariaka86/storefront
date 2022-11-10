import { connect} from 'react-redux';
import { filterCategory } from '../../Store/Reducers/actions';



const Categories = (props) => {


  return (
    <>
    <h3>Categories</h3>
      <ul>
        {props.categories.map((category, index) => (
          <li 
            key={`category-${index}`}
            onClick={() => props.filterCategory(category.name)}
          >
            {category.name}
          </li>
        ))}
      </ul>

    </>
  )
};

const mapStateToProps = (store) => {
  return {
    categories:store.categories.categories,
  }
}

const mapDispatchToProps = {
  filterCategory
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);