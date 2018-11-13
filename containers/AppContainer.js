import { connect } from 'react-redux';
import { fetchNews } from "../actions";
import App from "../components/App";

const mapStateToProps = state => {
    return {
        articles: state.articles,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchNews: () => {
            dispatch(fetchNews());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);