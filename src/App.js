import { Link, Route, Switch } from "react-router-dom";
import { CheckoutPage } from "./CheckoutPage";
import { NotFoundPage } from "./NotFoundPage";
import { SandwichBuilderPage } from "./SandwichBuilderPage";
import { SandwichPreviewPage } from "./SandwichPreviewPage";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/sandwich-preview">Превью бутерброда</Link>
          </li>
          <li>
            <Link to="/checkout">Оплата бутерброда</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/">
          <SandwichBuilderPage />
        </Route>
        <Route path="/sandwich-preview">
          <SandwichPreviewPage />
        </Route>
        <Route path="/checkout">
          <CheckoutPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
