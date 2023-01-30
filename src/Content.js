import Title from "./Title";
import Description from "./Description";

const Content = (props) => {
  console.log(); //
  return (
    <>
      <Title name={props.name} />
      <Description text={props.text} />
    </>
  );
};
export default Content;
