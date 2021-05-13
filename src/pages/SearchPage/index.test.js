import React from "react";
import { mount } from "enzyme";
import { MemoryRouter, Route } from "react-router-dom";
import SearchPage from ".";

describe("Pruebas en <SearchPage/>", () => {
  const query = "batman121212";

  test("debe de mostrarse correctamente con valores por defecto", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/search"]}>
        <Route path="/search" component={SearchPage} />
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(".alert-info").text().trim()).toBe(
      "Search some hero first"
    );
  });

  test("debe de mostrar a batman y el input con el valor del queryString", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/search?q=batman"]}>
        <Route path="/search" component={SearchPage} />
      </MemoryRouter>
    );

    expect(wrapper.find("input").prop("value")).toBe("batman");
  });

  test("debe de mostrar un error si no se encuetra el hero", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[`/search?q=${query}`]}>
        <Route path="/search" component={SearchPage} />
      </MemoryRouter>
    );

    expect(wrapper.find(".alert-warning").text().trim()).toBe(
      `There's not a superhero by the name: ${query}`
    );
  });

  test("debe de llamar el push del history", () => {
    const historyMock = {
      push: jest.fn(),
      location: {},
      listen: jest.fn(),
      createHref: jest.fn(),
      replace: jest.fn(),
    };

    const locationMock = {};

    const wrapper = mount(
      <MemoryRouter initialEntries={[`/search?q=${query}`]}>
        <Route
          path="/search"
          component={() => (
            <SearchPage history={historyMock} location={locationMock} />
          )}
        />
      </MemoryRouter>
    );

    wrapper.find("input").simulate("change", {
      target: {
        name: "search",
        value: "batman",
      },
    });

    wrapper.find("form").simulate("submit", { preventDefault: () => {} });

    expect(historyMock.push).toHaveBeenCalledWith(`?q=batman`);
  });
});
