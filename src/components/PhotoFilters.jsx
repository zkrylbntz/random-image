"use client";

import { useState } from "react";

export default function PhotoFilters({onFilterChange}){
const orientationTags = ["landscape"]
const weatherTags = ["snow"]
const objectTags = ["mountains"]

const [selectedTags, setSelectedTags] = useState([])

const handeTagChange = (tag) => {
  const updatedTags = selectedTags.includes (tag)
  ? selectedTags.filter ((t) => t ! = tag)
  : [... selectedTags, tag]
  setSelectedTags(updatedTags);
  onFilterChange(updatedTags)

}

return (
  <div>
    <input type="checkbox"/>
    
  </div>
)
}


// <!-- <div className="filter-group">
// <h3 className="text-lg font-semibold mb-3">Meal</h3>
// <ul className="space-y-2">
//   {mealTags.map((tag) => (
//     <li key={tag}>
//       <label className="inline-flex items-center space-x-2">
//         <input
//           type="checkbox"
//           value={tag}
//           checked={selectedTags.includes(tag)}
//           onChange={() => handleTagChange(tag)}
//           className="checkbox checkbox-warning border-orange-100"
//         />
//         <span>{tag}</span>
//       </label>
//     </li>
//   ))}
// </ul>
// </div> -->