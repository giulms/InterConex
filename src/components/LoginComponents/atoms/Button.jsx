import { BtnPrimary, BtnSecondary } from "./styles"


// eslint-disable-next-line react/prop-types
export const ButtonPrimary = ({ title, onClick, disabled }) => {
  return (
    <BtnPrimary onClick={onClick} disabled={disabled}>
        {title}
    </BtnPrimary>
  )
}

// eslint-disable-next-line react/prop-types
export const ButtonSecondary= ({ title, onClick }) => {
    return (
      <BtnSecondary onClick={onClick}>
          {title}
      </BtnSecondary>
    )
  }

  