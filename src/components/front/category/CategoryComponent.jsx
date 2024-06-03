import React from "react";
import CategoryItem from "./CategoryItem";
import { useSelector } from "react-redux";

export default function CategoryComponent() {
  const {
    category: { categories },
  } = useSelector((state) => state);
  return (
    <div className="container-fluid pt-5">
      <div className="row px-xl-5 pb-3">
        {categories.length > 0 &&
          categories.map((category, index) => (
            <CategoryItem category={category} key={index} />
          ))}
      </div>
    </div>
  );
}
