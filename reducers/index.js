const initialState = {
    articles: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "READ_FETHCHED_NEWS":
            const articlesWithKeys = action.articles.map((article, index) => ({  ...article, key: `${index}` }));
            return Object.assign({}, state, {
                articles: articlesWithKeys,
            });
        default:
            return state;
    }
};