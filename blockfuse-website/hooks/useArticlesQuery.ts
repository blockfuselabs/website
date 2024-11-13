import { useQuery } from '@tanstack/react-query';
import BaseUrl from '../services/http';

const useArticlesQuery = (enabled = true) => {
    const {
        data: articles,
        error: articlesError,
        isLoading: isArticlesLoading,
        isSuccess: isArticlesSuccess
    } = useQuery({
        queryKey: ['articles'],
        queryFn: BaseUrl.httpGetAllArticles,
        enabled
    });

    return {
        articles,
        articlesError,
        isArticlesLoading,
        isArticlesSuccess
    };
};

export default useArticlesQuery;