import React from "react";

import { mount } from "enzyme";
import PrivateRoute from "./PrivateRoute";
import { MemoryRouter } from "react-router";

describe("Pruebas en <PrivateRoute/>", () => {
  const props = {
    location: {
      pathname: "/marvel",
    },
  };

  Storage.prototype.setItem = jest.fn();
  test("Debe de mostrar el componente si esta autenticado y guardar localStorage ", () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute
          isAuth={true}
          component={() => <span>Listo</span>}
          {...props}
        />
      </MemoryRouter>
    );

    expect(wrapper.find("span").exists()).toBe(true);
    expect(wrapper.find("span").text()).toBe("Listo");
    expect(localStorage.setItem).toHaveBeenCalledWith("lastPath", "/marvel");
  });

  test("Debe de bloquear el componente si no esta autenticado", () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute
          isAuth={false}
          component={() => <span>Listo</span>}
          {...props}
        />
      </MemoryRouter>
    );

    expect(wrapper.find("span").exists()).toBe(false);
    expect(wrapper.html()).toBe("");
    expect(localStorage.setItem).toHaveBeenCalledWith("lastPath", "/marvel");
  });
});
