import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #322835;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  padding: 30px 50px;
  width: 90%;
  max-width: 450px;
  border-radius: 5px;
  margin-bottom: 30px;
  margin-top: 30px;
  @media screen and (max-width: 350px) {
    padding: 10px 20px;
  }
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  margin-bottom: 20px;
  @media screen and (max-width: 350px) {
    font-size: 18px;
    height: auto;
  }
`
export const Input = styled.input`
  outline: none;
  height: 30px;
  padding-left: 10px;
  border: 1px solid #cbd2d9;
  width: 100%;
`
export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 20px;
`
export const Button = styled.button`
  border: none;
  outline: none;
  border-radius: 5px;
  color: #ffffff;
  background-color: #d946ef;
  font-family: 'Roboto';
  font-size: 15px;
  padding: 5px 10px;
  margin-left: 10px;
  cursor: pointer;
  align-self: center;
`

export const Paragraph = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
`
