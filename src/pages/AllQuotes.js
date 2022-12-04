import QuoteList from "../components/quotes/QuoteList";

const DUMMY_LIST = [
  { id: "p1", author: "Max", text: "Learning React is fun!" },
  { id: "p2", author: "Max", text: "Learning React is awsom!" },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_LIST} />;
};

export default AllQuotes;
