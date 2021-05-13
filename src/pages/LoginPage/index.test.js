import { mount } from "enzyme";
import LoginPage from ".";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

describe("Pruebas en <LoginPage/>", () => {
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
      name: "Luis Miguel",
      email: "luismiguel@mail.com",
    },
  };

  const wrapper = mount(
    <AuthContext.Provider value={contextValues}>
      <LoginPage history={historyMock} />
    </AuthContext.Provider>
  );
  test("Debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de realizar el dispatch y la navegación", () => {
    wrapper.find("button").simulate("click");

    expect(historyMock.replace).toHaveBeenCalledWith("/");
    expect(contextValues.dispatch).toHaveBeenCalledWith({
      type: types.login,
      payload: { ...contextValues.user },
    });
  });
});
