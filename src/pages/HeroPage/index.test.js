import { mount, shallow } from "enzyme";
import { MemoryRouter, Route, Router } from "react-router-dom";
import HeroPage from ".";
import { AuthContext } from "../../auth/AuthContext";

describe("Pruebas en <HeroPage/>", () => {
  const contextValues = {
    dispatch: jest.fn(),
    user: {
      logged: true,
      name: "Luis Miguel",
    },
  };

  test("debe de mostrar el componente <Redirect/> si no hay argumentos en el URL", () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValues}>
        <MemoryRouter initialEntries={["/hero"]}>
          <HeroPage />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(wrapper.find("Redirect").exists()).toBe(true);
  });
  test("debe de mostrar un hero si el parametro existe y se encuentra", () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValues}>
        <MemoryRouter initialEntries={["/hero/marvel-spider"]}>
          <Route path="/hero/:heroid" component={HeroPage} />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(wrapper.find(".row").exists()).toBe(true);
  });

  // test("debe de regresar a la pantalla anterior con PUSH", () => {
  //   const wrapper = mount(
  //     <AuthContext.Provider value={contextValues}>
  //       <MemoryRouter initialEntries={["/hero/marvel-spider"]}>
  //         <Route path="/hero/:heroid" component={HeroPage} />
  //       </MemoryRouter>
  //     </AuthContext.Provider>
  //   );
  //   console.log(wrapper.html());
  //   wrapper.find("button").simulate("click");
  //   expect().toHaveBeenCalledWith("/");
  // });
});
