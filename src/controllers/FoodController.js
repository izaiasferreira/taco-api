const foodList = require('../data/foodList.json');

class Food {
  static getFoodList() {
    return foodList;
  }

  static getFoodById(foodId) {
    return foodList.filter(food => food.id.toString() === foodId.toString());
  }
  static getFoodByName(name) {
    var data = name.split(' ')
    var final = []
    foodList.forEach((food) => {
      var count = 0
      for (let index = 0; index < data.length; index++) {
        if (index === 0 && food.description.includes(data[index][0].toUpperCase() + data[index].slice(1)) === true) {
          count++
        }
        if (index > 0 && food.description.includes(data[index]) === true) {
          count++
        }
      }
      var result = (count - data.length)
      if (result === 0) {
        final.push(food);
      }
    })
    return final
  }
  static getFoodByCategoryId(categoryId) {
    const response = foodList.filter(
      food => food.category_id.toString() === categoryId.toString()
    );

    return response;
  }
}

module.exports = Food;
