import './App.css';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Dropdown, Button, Navbar, Hero, Footer, Container, Content } from 'react-bulma-components';
import {XYPlot, LineMarkSeries} from 'react-vis';
import '../node_modules/react-vis/dist/style.css';

function App() {
  const data = [
    {x: 0, y: 8},
    {x: 1, y: 5},
    {x: 2, y: 4},
    {x: 3, y: 9},
    {x: 4, y: 1},
    {x: 5, y: 7},
    {x: 6, y: 6},
    {x: 7, y: 3},
    {x: 8, y: 2},
    {x: 9, y: 0}
  ];
  return (
    <div className="App">

      <Navbar color="dark">
        <Navbar.Menu>
          <Navbar.Container>
            <Navbar.Item href="#">
              Home
            </Navbar.Item>
            <Navbar.Item href="#">
              ???
            </Navbar.Item>
          </Navbar.Container>
          <Navbar.Container position="end">
            <Navbar.Item href="#">
              About
            </Navbar.Item>
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar>

      <Hero size="medium">
        <Hero.Body>

        <XYPlot height={450} width={1200}>
          <LineMarkSeries data={data} />
        </XYPlot>

        </Hero.Body>
      </Hero>

        <Dropdown>
          <Dropdown.Item value="item">
            Dropdown item
          </Dropdown.Item>
        </Dropdown>

        <Button color='danger'>
          Button
        </Button>

        

      <Hero.Footer>
        <Footer>
          <Container>
            <Content style={{ textAlign: 'center' }}>
              <p>
                <strong>FFXIV Meta</strong> by <a href="#">Aman Gill</a>. The github link for this site is 
                <a href="#"> here</a>.
              </p>
            </Content>
          </Container>
        </Footer>
      </Hero.Footer>

    </div>
    
  );
}

export default App;
