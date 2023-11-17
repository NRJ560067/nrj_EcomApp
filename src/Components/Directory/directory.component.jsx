import "./dir_components.style.scss";
import Categorycontainer from "../Category.component/CategoryContainer";
const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((Category) => (
        <Categorycontainer key={Category.id} propOb={Category} />
      ))}
    </div>
  );
};
export default Directory;
