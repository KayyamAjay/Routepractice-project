import QouteList from "../components/quotes/QuoteList";

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

const AllQuotes = () => {
  return <QouteList quotes={Dummy_quotes} />;
};

export default AllQuotes;
