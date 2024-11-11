const useApplicationQuery = (enabled = true) => {
    const {
      data: applications,
      error: applicationsError,
      isLoading: isApplicationsLoading,
      isSuccess: isApplicationsSuccess,
    } = useQuery({
      queryKey: ['applications'],
      queryFn: BaseUrl.httpGetAllApplications,
      enabled,
    });
  
    const httpSubmitApplication = async (formData) => {
      try {
        await AxiosInstance.post(routes.APPLICATION, formData);
      } catch (error) {
        throw error;
      }
    };
  
    return {
      applications,
      applicationsError,
      isApplicationsLoading,
      isApplicationsSuccess,
      httpSubmitApplication,
    };
  };

  export default useApplicationQuery;