import QuoteForm from "../components/quotes/QuoteForm";
const NewQuote = () => {
  const addHandler = (data) => {
    console.log(data);
  };
  return <QuoteForm onAddQuote={addHandler} />;
};

export default NewQuote;
