import "./categorycontainer-body.styles.scss";
import CategoryBody from "./CategoryBodyContainer";

const Categorycontainer = ({ propOb }) => {
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${propOb.imageUrl})`,
        }}
      />

      <CategoryBody propObj={propOb} />
      {/**
            <div className="category-body-container">
                <h2>{title}</h2>
                <p>Shop Now</p>
            </div>
            */}
    </div>
  );
};
export default Categorycontainer;
