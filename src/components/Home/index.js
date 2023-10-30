import {Component} from 'react'

import {
  HomeContainer,
  ContentContainer,
  Heading,
  Input,
  InputContainer,
  Button,
  Paragraph,
} from './styledComponents'

class Home extends Component {
  state = {
    text: '',
    isClicked: false,
  }

  Change = () => {
    this.setState(prev => ({isClicked: !prev.isClicked}))
  }

  onChangeInput = event => {
    this.setState({text: event.target.value})
  }

  render() {
    const {text, isClicked} = this.state
    const typeText = isClicked ? 'Edit' : 'Save'
    return (
      <HomeContainer>
        <ContentContainer>
          <Heading>Editable Text Input</Heading>
          <InputContainer>
            {isClicked ? (
              <Paragraph>{text}</Paragraph>
            ) : (
              <Input type="text" value={text} onChange={this.onChangeInput} />
            )}

            <Button type="button" onClick={this.Change}>
              {typeText}
            </Button>
          </InputContainer>
        </ContentContainer>
      </HomeContainer>
    )
  }
}
export default Home
