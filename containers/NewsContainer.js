import { connect } from 'react-redux';
import { fetchNews } from "../actions";
import News from "../components/News";

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

export default connect(mapStateToProps, mapDispatchToProps)(News);