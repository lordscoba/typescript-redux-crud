export const handleError = (error: any) => {
  return error?.response && error?.response?.data?.message
    ? error?.response?.data?.message
    : error?.response?.data
    ? error?.response?.data
    : error?.message;
};
