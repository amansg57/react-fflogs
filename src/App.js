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
import {FlexibleWidthXYPlot, LineMarkSeries, XAxis, YAxis, DiscreteColorLegend} from 'react-vis';
import '../node_modules/react-vis/dist/style.css';
const json = require('./data.json');

function App() {
  const lineData = [
    {title: 'Dragoon', color: 'blue', strokeStyle: 'solid'},
    {title: 'Ninja', color: 'red', strokeStyle: 'solid'}
  ]

  var lineMarks = [];
  for (var i = 0; i < lineData.length; i++) {
    lineMarks.push(<LineMarkSeries 
                    strokeStyle={lineData[i].strokeStyle}
                    color={lineData[i].color}
                    data={json.data[i]} />)
  }

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
        <Box>
          <Level>
            <DiscreteColorLegend orientation='horizontal' items={lineData}/>
          </Level>
        </Box>
      </Section>

      <Section>
        <Container fluid>

        <FlexibleWidthXYPlot height="400">
          {lineMarks}
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
                <Dropdown color="primary" up="true">
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
