import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_LIST = [
  { id: "p1", author: "Max", text: "Learning React is fun!" },
  { id: "p2", author: "Max", text: "Learning React is awsom!" },
];

const QuoteDetails = () => {
  const param = useParams();
  const match = useRouteMatch();

  const quote = DUMMY_LIST.find((quote) => quote.id === param.quoteId);

  if (!quote) {
    return <p>No quote found!</p>;
  }

  return (
    <section>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className={"btn--flat"} to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </section>
  );
};

export default QuoteDetails;
