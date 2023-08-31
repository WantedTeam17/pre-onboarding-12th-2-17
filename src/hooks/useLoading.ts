import { useState } from "react";

const useLoading = () => {
  const [initialLoading, setInitialLoading] = useState<boolean>(false);
  const [moreDataLoading, setMoreDataLoading] = useState<boolean>(false);
  const [loadingMessage, setLoadingMessage] = useState<string>("Loading...");

  return {
    initialLoading,
    setInitialLoading,
    moreDataLoading,
    setMoreDataLoading,
    loadingMessage,
    setLoadingMessage,
  };
};

export default useLoading;
