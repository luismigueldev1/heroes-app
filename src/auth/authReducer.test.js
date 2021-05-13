import { types } from "../types/types";
import { authReducer } from "./authReducer";

describe("Pruebas en authReducer", () => {
  const user = {
    name: "Luis Miguel",
    email: "luismiguel@gmail.com",
  };

  const actionLogin = {
    type: types.login,
    payload: user,
  };

  test("debe de retornar el estado por defecto", () => {
    const state = authReducer({ logged: false }, {});
    expect(state).toEqual({ logged: false });
  });

  test("debe de autenticar y añadir el name del usuario", () => {
    const state = authReducer({ logged: false }, actionLogin);
    expect(state).toEqual({
      ...user,
      logged: true,
    });
  });

  test("debe de borrar el name del usuario y logged en false", () => {
    authReducer({ logged: false }, actionLogin);

    const newState = authReducer(
      {},
      {
        type: types.logout,
      }
    );
    expect(newState).toEqual({
      logged: false,
    });
  });
});
