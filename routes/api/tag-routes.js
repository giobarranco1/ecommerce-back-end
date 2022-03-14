const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  // find all tags
  const allTags = await Tag.findAll({
    // be sure to include its associated Product data
    include: [{ model: Product, through: ProductTag }],
  });
  res.status(200).json(allTags);
});

router.get("/:id", async (req, res) => {
  // find a single tag by its `id`
  const singleTag = await Tag.findPK({
    // be sure to include its associated Product data
    include: [{ model: Product, through: ProductTag }],
  });
  res.status(200).json(singleTag);
});

router.post("/", async (req, res) => {
  // create a new tag
  const newTag = await Tag.create({
    // use body "tag_name": "new Tag name" in insomnia
    tag_name: req.body.tag_name,
  });
  res.status(200).json(newTag);
});

router.put("/:id", async (req, res) => {
  // update a tag's name by its `id` value
  const updateTag = await Tag.update(
    { tag_name: req.body.tag_name },
    { where: { id: req.params.id } }
  );
  res.status(200).json(updateTag);
});

router.delete("/:id", (req, res) => {
  // delete on tag by its `id` value
  const deleteTag = await Tag.destroy({
    where: { id: req.params.id },
  });
  res.status(200).json(deleteTag);
});

module.exports = router;
