import { useState, useCallback, useEffect } from "react";

function useHttp() {
   const [loading, setLoading] = useState(false);
   const [badResponse, setBadResponse] = useState(null);
   const [successResponse, setSuccessResponse] = useState(false)
   const [globalError, setGlobalError] = useState(false);

   useEffect(() => {
      const timer = setTimeout(() => {
         setBadResponse(null);
         setGlobalError(false);
      }, 2000);

      return () => {
         clearTimeout(timer);
      }
   },[badResponse, globalError])

   const request = useCallback(async (url, method, body = null, headers ={ 'Content-Type': 'application/json'}) => {
      setLoading(true);
  
      try {
         const response = await fetch(url, {method, body, headers});
         console.log(response)
         if (!response.ok) {
            setBadResponse(response.status);
            throw new Error(`Could not fetch ${url}, status ${response.status}`)
         }

         const data = await response.json();

         setLoading(false);
         setSuccessResponse(true);
         
         return data;

      } catch(e) {
         setLoading(false);
         if (!badResponse) {
            setGlobalError(true)
         }
         throw e;
      }

   }, [])

   const clearError = useCallback(() => setBadResponse(null), [])
   return {loading, badResponse, successResponse, clearError, request, globalError}
}

export default useHttp;