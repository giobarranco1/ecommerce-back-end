// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "category_id",
});
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "category_id",
});

//need to ask office hours/tutor
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  // Product is tied to tag through Product tag so
  // we need to indicate that with "through: ProductTag"
  through: ProductTag,
  foreignKey: "product_id",
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  // Same as above
  // connected to product through ProductTag
  through: ProductTag,
  foreignKey:"tag_id"
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
