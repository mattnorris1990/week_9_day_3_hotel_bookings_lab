import './App.css';
import BookingsContainer from './containers/BookingsContainer';
import styled from "styled-components"

const Nav = styled.div`
background-color: #434eb1;
margin: 0;
padding: 2vh;

`

const Heading = styled.h1`
color: white;
font-family: 'Blaka Hollow', cursive;
font-size: 300%;
`

function App() {
  return (
    <>
    <Nav>
      <Heading>The Squirrel's Stash Inn</Heading>
    </Nav>

      <BookingsContainer/>
    </>
  );
}

export default App;
