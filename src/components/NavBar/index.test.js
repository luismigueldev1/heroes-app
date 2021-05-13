import { mount } from "enzyme";
import { MemoryRouter, Router } from "react-router-dom";
import NavBar from ".";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

describe("Pruebas en <Navbar/>", () => {
  const historyMock = {
    push: jest.fn(),
    location: {},
    listen: jest.fn(),
    createHref: jest.fn(),
    replace: jest.fn(),
  };
  const contextValues = {
    dispatch: jest.fn(),
    user: {
      logged: true,
      name: "Luis Miguel",
    },
  };
  const wrapper = mount(
    <AuthContext.Provider value={contextValues}>
      <MemoryRouter>
        <Router history={historyMock}>
          <NavBar />
        </Router>
      </MemoryRouter>
    </AuthContext.Provider>
  );

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("debe de mostrarse correctamente ", () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(".text-info").text().trim()).toBe(
      contextValues.user.name
    );
  });

  test("debe de llamar el logout y usar history", () => {
    wrapper.find(".btn-secondary").simulate("click");

    expect(contextValues.dispatch).toHaveBeenCalledWith({ type: types.logout });
    expect(historyMock.replace).toHaveBeenCalledWith("/login");
  });
});
