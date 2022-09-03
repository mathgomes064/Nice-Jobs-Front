import { forwardRef, useState } from "react";
import { FiEyeOff, FiEye } from "react-icons/fi";
import { Container } from "./style";
const InputPassword = forwardRef(({ label, id, placeholder, ...rest }, ref) => {
  const [type, setType] = useState("password");
  return (
    <Container>
      <label htmlFor={id}>{label}</label>
      <div>
        <input
          type={type}
          placeholder={placeholder}
          id={id}
          {...rest}
          ref={ref}
        />
        {type === "password" ? (
          <FiEyeOff onClick={() => setType("text")} />
        ) : (
          <FiEye onClick={() => setType("password")} />
        )}
      </div>
    </Container>
  );
});
export default InputPassword;
