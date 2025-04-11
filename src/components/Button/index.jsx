import PropTypes, { checkPropTypes } from "prop-types";
import { Button } from "./styles"
function DefaultButton({ children, theme, ...props }) {

     return (
          <Button {...props} theme={theme}>{children}</Button>
     )
}
DefaultButton.protoTypes = {
     children: PropTypes.node.isRequired,
     theme: PropTypes.string
}
export default DefaultButton;

