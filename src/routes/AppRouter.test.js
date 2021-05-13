import React from "react";
import { mount } from "enzyme";
import AppRouter from "./AppRouter";
import { AuthContext } from "../auth/AuthContext";

describe("Pruebas en <AppRouter/>", () => {
  const contextValues = {
    dispatch: jest.fn(),
    user: {
      logged: false,
    },
  };
  test("Debe de mostrar el login si no esta autenticado ", () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValues}>
        <AppRouter />
      </AuthContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de mostrar el componente marvel si esta autenticado", () => {
    const contextValues = {
      dispatch: jest.fn(),
      user: {
        logged: true,
        name: "Luis Miguel",
        email: "luismiguel@gmail.com",
      },
    };
    const wrapper = mount(
      <AuthContext.Provider value={contextValues}>
        <AppRouter />
      </AuthContext.Provider>
    );
    expect(wrapper.find(".navbar").exists()).toBe(true);
  });
});
