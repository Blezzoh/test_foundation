import "./App.css";
import { Grid} from "semantic-ui-react";
import VerticalSidebar  from "./views/verticalSidebar";


function App() {
  return (
    <div className="App">
      <Grid>
        <Grid.Row>
          <Grid.Column width={16}>
            Header goes here
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={3}>
            <VerticalSidebar />
          </Grid.Column>
          <Grid.Column width={13}>
            Rest goes here
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default App;
