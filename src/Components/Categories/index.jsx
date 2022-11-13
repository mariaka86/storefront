import { connect} from 'react-redux';
import { filterCategory } from '../../Store/Reducers/actions';
import { ButtonGroup, Button } from "@mui/material"



const Categories = (props) => {


  return (
    <>
    <h3>Categories</h3>
      <ul>
        {props.categories.map((category, index) => (
          <Button 
            key={`category-${index}`}
            onClick={() => props.filterCategory(category.name)}
          >
            {category.name}
          </Button>
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