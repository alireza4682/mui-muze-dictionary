import Form from "./components/form.component";
import CardContainer from "./components/cardContainer.component";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Form />
      <CardContainer />
    </div>
  );
}

export default App;
