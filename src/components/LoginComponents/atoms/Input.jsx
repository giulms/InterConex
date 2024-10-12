import { InputContainer, IconContainer, InpPrimary, Wrapper } from "./styles"

// eslint-disable-next-line react/prop-types
export const InputPrimary = ({ placeholder, leftIcon, rightIcon, name, ...rest }) => {
  return (<Wrapper>
    <InputContainer>
        {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
        <InpPrimary placeholder={placeholder} name={name} {...rest}/>
        {rightIcon ? (<IconContainer>{rightIcon}</IconContainer>) : null}
    </InputContainer>
    </Wrapper>)
}