const passport = require("passport");
const db = require("../models");
const local = require("./local");

module.exports = () => {
  passport.serializeUser((user, done) => {
    return done(null, user.id);
  }); // 서버쪽에 [{id:3, cookie:"asd"}] 처럼 배열 형태로 저장, 쿠키는 프론트로 보냄 - 프론트는 3번 id와 연결된 쿠키 있구나
  passport.deserializeUser(async (id, done) => {
    // 프론트에서 쿠키를 받아서 그걸로 id 찾고 그 id로 유저정보 찾음
    try {
      const user = await db.User.findOne({
        where: {
          id
        }
      });
      return done(null, user); // 불러온 데이터 req.user에 저장
    } catch (e) {
      console.error(e);
      return done(e);
    }
  });
  local();
};
