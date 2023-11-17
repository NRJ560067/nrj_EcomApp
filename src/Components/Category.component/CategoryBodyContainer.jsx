const CategoryBody = ({ propObj }) => {
  const { title } = propObj;
  return (
    <div className="category-body-container">
      <h2>{title}</h2>
      <p>Shop Now</p>
    </div>
  );
};
export default CategoryBody;
