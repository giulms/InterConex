import { InputContainer, IconContainer, InpPrimary, LabelInput, Wrapper } from "./styles"

// eslint-disable-next-line react/prop-types
export const InputPrimary = ({ title, leftIcon, name, ...rest }) => {
  return (<Wrapper>
    <LabelInput htmlFor={name}>{title}</LabelInput>
    <InputContainer>
        {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
        <InpPrimary name={name} {...rest}/>
    </InputContainer>
    </Wrapper>)
}