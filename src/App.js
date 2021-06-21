import Layout from "./Templates/Layout.jsx";
import Button from "./Component/Button";
import TransactionTemplate from "./Templates/TransactionTemplate";
import "./App.css";
import { Route, useHistory } from "react-router-dom";
function App() {
  let history = useHistory();
  return (
    <div className="App">
      <Layout>
        <div
          style={{
            width: "50%",
          }}
        >
          <Route exact path={"/"}>
            <Button
              onClick={() => {
                history.push({
                  pathname: "transaction",
                  kind: "cellphone",
                });
              }}
            >
              Celular
            </Button>
            <Button
              onClick={() => {
                history.push({
                  pathname: "transaction",
                  kind: "tv",
                });
              }}
            >
              TV
            </Button>
            <Button
              onClick={() => {
                history.push({
                  pathname: "transaction",
                  kind: "pin",
                });
              }}
            >
              PIN
            </Button>
          </Route>

          <Route path="/transaction">
            <TransactionTemplate />
          </Route>
        </div>
      </Layout>
    </div>
  );
}

export default App;
