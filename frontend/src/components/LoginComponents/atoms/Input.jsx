import { Controller } from "react-hook-form"
import { InputContainer, IconContainer, InpPrimary, Wrapper, ErrorText } from "./styles"

// eslint-disable-next-line react/prop-types
export const InputPrimary = ({ leftIcon, rightIcon, name, control, errorMessage, ...rest }) => {
  return (
    <Wrapper>
      <InputContainer>
          {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
          <Controller
            name={name}
            control={control}
            render={({ field }) => <InpPrimary id={name} {...field} {...rest} />}
          />
          {rightIcon ? (<IconContainer>{rightIcon}</IconContainer>) : null}
      </InputContainer>

      {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
    </Wrapper>
  )
}