import Title from "./Title";
import Description from "./Description";

const Content = (props1, props2) => {
  return (<Title name={props1} />), (<Description text={props2} />);
};
export default Content;
