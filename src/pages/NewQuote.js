import QuoteForm from "../components/quotes/QuoteForm";
import { useHistory } from "react-router";
const NewQuote = () => {
  const history = useHistory();
  const addHandler = (data) => {
    console.log(data);
    history.push("/quotes"); //gets to quotes page after submiting
  };
  return <QuoteForm onAddQuote={addHandler} />;
};

export default NewQuote;
