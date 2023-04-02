import Form from "./components/form.component";
import CardContainer from "./components/cardContainer.component";
import Mode from "./components/mode.component";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Form />
      <CardContainer />
      <Mode />
    </div>
  );
}

export default App;
