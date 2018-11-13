const apiKey = "01756f0bba0f46cca3e77b3920af96a4";
const apiUrl = "https://newsapi.org/v2";

export const fetchNews = () => {
    const country = "us";
    return (dispatch) => {
        const myHeaders = new Headers({ "x-api-key": apiKey });
        return fetch(`${apiUrl}/top-headlines?country=${country}`, { headers: myHeaders })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                dispatch(readFetchedNews(data));
            });
    };
};

export const readFetchedNews = (data) => ({
    type: "READ_FETHCHED_NEWS",
    articles: data.articles,
});