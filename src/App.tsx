import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import Gallery from "./Gallery";
import { Tab } from 'semantic-ui-react'
import Jokes from "./Jokes";

const panes = [
  { menuItem: 'Gallery', render: () => <Tab.Pane><Gallery/></Tab.Pane> },
  { menuItem: 'Jokes', render: () => <Tab.Pane><Jokes/></Tab.Pane> },
  { menuItem: 'Riddles', render: () => <Tab.Pane>Riddles</Tab.Pane> },
]



function App() {
  return (
      <Tab panes={panes} />
  );
}

export default App;
