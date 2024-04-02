import Body from "./components/functionalComponents/Body"
import { Provider } from "react-redux"
import appStore from "./redux/todoStore"
export default function App() {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}