import { useQuery } from '@tanstack/react-query';
import BaseUrl from '../services/http';

const useFAQSQuery = (enabled = true) => {
    const {
        data: FAQS,
        error: FAQSError,
        isLoading: isFAQSLoading,
        isSuccess: isFAQSSuccess
    } = useQuery({
        queryKey: ['faqs'],
        queryFn: BaseUrl.httpGetAllFAQS,
        enabled
    });

    return {
        FAQS,
        FAQSError,
        isFAQSLoading,
        isFAQSSuccess
    };
};

export default useFAQSQuery;
