import { useParams } from "react-router";

const QuoteDetails = () => {
  const pramas = useParams();
  return <h1>QuoteDetails {pramas.quoteid}</h1>;
};
export default QuoteDetails;
