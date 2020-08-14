"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

async function VerifyToken(token, role, _ref) {
  var userRepository = _ref.userRepository,
      accessTokenManager = _ref.accessTokenManager;

  if (!token) {
    throw new Error("No Token");
  }

  if (!role) {
    throw new Error("No Role");
  }

  var decoded = accessTokenManager.decode(token); // Look up user from id

  var user = await userRepository.get(decoded.uid);

  if (!user) {
    throw new Error("No Such User");
  } // Check role


  if (!user.role.includes(role)) {
    throw new Error("User does not have this role");
  }

  return true;
}

var _default = VerifyToken;
exports["default"] = _default;