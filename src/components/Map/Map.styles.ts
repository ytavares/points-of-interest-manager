import { styled } from 'styled-components';

export const Header = styled.div`
  background: #ddd;
  padding: 10px;
  display: flex;
  flex-direction: column;
  height: 120px;
`
export const FormBox = styled.div`
  background: #ddd;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

export const HeaderFormTitle = styled.h1`
  margin: 0;
  font-size: 40px;
  font-weight: normal;
  line-height: 38px;
  margin-bottom: 20px;
`

export const HeaderForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  label {
    margin-right: 20px;
  }
  input {
    margin-right: 40px;
    height: 30px
  }
`

export const ButtonForm = styled.button`
  background-color: #091a7d;
  cursor: pointer;
  padding: 8px;
  color: #FFF;
  border-radius: 5px;
  border: none;
  max-height: 40px;
  margin-left: -10px;
  &:hover{

  }
`
export const InputBox = styled.div`

`