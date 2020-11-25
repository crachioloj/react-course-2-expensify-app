import authReducer from "../../reducers/auth";

test("should set uid for login", () => {
  const action = {
    type: "LOGIN",
    uid: "1234"
  };
  const state = authReducer(undefined, action);
  expect(state.uid).toBe("1234");
});

test("should clear uid for logout", () => {
  const action = {
    type: "LOGOUT",
  };
  const state = authReducer({uid: "anything"}, action);
  expect(state).toEqual({});
});