import { useQuery } from '@tanstack/react-query';
import BaseUrl from '../services/http';

const useTestimoinalQuery = (enabled = true) => {
    const {
        data: Testimoinal,
        error: TestimoinalError,
        isLoading: isTestimoinalLoading,
        isSuccess: isTestimoinalSuccess
    } = useQuery({
        queryKey: ['testimonies'],
        queryFn: BaseUrl.httpGetAllTestimonies,
        enabled
    });

    return {
        Testimoinal,
        TestimoinalError,
        isTestimoinalLoading,
        isTestimoinalSuccess
    };
};

export default useTestimoinalQuery;