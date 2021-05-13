import { mount } from "enzyme";
import { MemoryRouter } from "react-router";
import { AuthContext } from "../auth/AuthContext";
import DashboardRouter from "./DashboardRouter";

describe("Pruebas en <DashboardRouter/>", () => {
  const contextValues = {
    dispatch: jest.fn(),
    user: {
      logged: true,
      name: "Luis Miguel",
    },
  };

  test("debe mostrarse correctamente ", () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValues}>
        <MemoryRouter>
          <DashboardRouter />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(".text-info").text()).toBe(contextValues.user.name);
  });
});
