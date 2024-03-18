import React from "react";

function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  const categoryButtons = categories.map((category) => {
    const className = category === selectedCategory ? "selected" : null;
    return (
      <button
        key={category}
        className={className}
        onClick={() => onSelectCategory(category)}
      >
        {category}
      </button>
    );
  });

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;

// import React from "react";

// function CategoryFilter({ categories, selectedCategory, handleSelectedCategory }) {

//   const categoryButtons = categories.map(category => (
//     <button 
//       key = {category} 
//       onClick = {(e) => handleSelectedCategory(category)}
//       className={category === selectedCategory ? "selected" : null}>
//       {category}
//     </button>

//   ))

//   return (
//     <div className = "categories">
//       <h5>Category filters</h5>
//       {categoryButtons}
//     </div>

//   )
// }

// export default CategoryFilter;