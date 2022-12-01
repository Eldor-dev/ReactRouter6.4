import { Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";

const QuoteDetails = () => {
  const param = useParams();

  return (
    <section>
      <h1>Quote Details Page</h1>
      <p>{param.quoteId}</p>
      <Route path={`/quotes/${param.quoteId}/comments`}>
        <Comments />
      </Route>
    </section>
  );
};

export default QuoteDetails;
