import React, { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import HeroesList from "../../components/HeroesList";

function DcPage() {
  const context = useContext(AuthContext);
  console.log(context);
  return (
    <div>
      <h1>DC Heroes</h1>
      <hr />
      <HeroesList publisher="DC Comics" />
    </div>
  );
}

export default DcPage;
