import React from 'react'
import { Container } from '@mui/system'


const react_header = () => {
  return (
    <Container maxWidth="xl">
        <Text>My Name is Britney Frizzell and I am a software developer.</Text>
    </Container>
  )
}

export default react_header

















const domContainer = document.querySelector('#react_header');
const root = ReactDOM.createRoot(domContainer);
root.render(e())