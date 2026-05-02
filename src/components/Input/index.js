import { InputContainer } from "./styles";

// disabled para inpedir a entrada do input
const Input = ({value}) => { 
  return (
    <InputContainer>
      <input disabled value={value}/> 
    </InputContainer>
  );
}

export default Input;
