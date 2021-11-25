import { Route, useParams } from "react-router";
import { Fragment } from "react";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const Dummy_quotes = [
  {
    id: "1",
    author: "Prince",
    text: "Playing Brawl Stars is Fun",
  },
  {
    id: "2",
    author: "Ajay",
    text: "Practicing React is Fun!",
  },
];

const QuoteDetails = () => {
  const pramas = useParams();
  const quote = Dummy_quotes.find((quote) => quote.id === pramas.quoteid);
  if (!quote) {
    return <p>No Quote Found</p>;
  }
  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${pramas.quoteid}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  ); //path may also be path = '/quotes/:quoteid/comments'
};
export default QuoteDetails;
