import './App.scss';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import Button from 'react-bulma-components/lib/components/button';
import Dropdown from 'react-bulma-components/lib/components/dropdown';
import Navbar from 'react-bulma-components/lib/components/navbar';
import Hero from 'react-bulma-components/lib/components/hero';
import Footer from 'react-bulma-components/lib/components/footer';
import Container from 'react-bulma-components/lib/components/container';
import Content from 'react-bulma-components/lib/components/content';
import Section from 'react-bulma-components/lib/components/section';
import Level from 'react-bulma-components/lib/components/level';
import Box from 'react-bulma-components/lib/components/box';
import Heading from 'react-bulma-components/lib/components/heading';
import {FlexibleWidthXYPlot, LineMarkSeries, XAxis, YAxis} from 'react-vis';
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
  const data2 = [
    {x: 0, y: 5},
    {x: 1, y: 3},
    {x: 2, y: 6},
    {x: 3, y: 1},
    {x: 4, y: 9},
    {x: 5, y: 6},
    {x: 6, y: 7},
    {x: 7, y: 2},
    {x: 8, y: 3},
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

      <body>

      <Section>
        <Container fluid>

        <FlexibleWidthXYPlot height="400">
          <LineMarkSeries data={data} />
          <LineMarkSeries
            lineStyle={{stroke: 'red'}}
            markStyle={{stroke: 'blue'}} 
            data={data2} />
          <XAxis />
          <YAxis />
        </FlexibleWidthXYPlot>

        </Container>
      </Section>
      
      <Section>
        <Box>
          <Level>
            <Level.Item>
              <div>
                <Heading renderAs="p" heading style={{ textAlign: 'center' }}>
                  Dropdown
                </Heading>
                <Dropdown color="primary">
                  <Dropdown.Item value="item">
                    Dropdown item
                  </Dropdown.Item>
                </Dropdown>
              </div>
            </Level.Item>

            <Level.Item>
              <div>
                <Heading renderAs="p" heading style={{ textAlign: 'center' }}>
                  Button
                </Heading>
                <Button color='primary'>
                  Button
                </Button>
              </div>
            </Level.Item>
          </Level>
        </Box>
      </Section>

      </body>

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
