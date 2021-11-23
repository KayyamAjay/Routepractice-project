import { Route, useParams } from "react-router";
import { Fragment } from "react";
import Comments from "../components/comments/Comments";
const QuoteDetails = () => {
  const pramas = useParams();
  return (
    <Fragment>
      <h1>Quote Details</h1>
      <p>{pramas.quoteid}</p>
      <Route path={`/quotes/${pramas.quoteid}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  ); //path may also be path = '/quotes/:quoteid/comments'
};
export default QuoteDetails;
