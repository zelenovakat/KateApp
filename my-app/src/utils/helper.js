export const updateObjectInArray = (array, newItem) => {
  return array.map((item) => {
    if (newItem.name !== item.name) {
      // This isn't the item we care about - keep it as-is
      return item
    }
    // Otherwise, this is the one we want - return an updated value
    return {
      ...item,
      ...newItem
    }
  })
}

export const deleteObjectInArray = (array, name) => {
  return array.filter( (item) => item.name !== name)
}

// opacity: 0.7; /* Полупрозрачный фон */
//     filter: alpha(Opacity=70); /* Прозрачность в IE */

