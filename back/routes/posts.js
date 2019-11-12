const express = require("express");
const db = require("../models");

const router = express.Router();

router.get("/", async (req, res, next) => {
  // GET /api/posts
  try {
    const posts = await db.Post.findAll({
      include: [
        {
          model: db.User,
          attributes: ["id", "nickname"]
        }
      ],
      order: [["createdAt", "DESC"]] // 2차원배열, DESC는 내림차순, ASC는 오름차순
    });
    res.json(posts);
    // 기본적으로는 tojson안붙여도되는데 db에서 가져온 데이터를 변형할경우는 tojson을 붙여야 된다.
  } catch (e) {
    console.error(e);
    next(e);
  }
});

module.exports = router;
