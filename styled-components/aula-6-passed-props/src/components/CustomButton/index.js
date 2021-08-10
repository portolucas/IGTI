import Button from "../Button";

const ReversedButton = (props) => (
  <Button {...props} children={props.children.split("").reverse()} />
);

export default ReversedButton;
