const Service = () => {
   const __apibase = "https://incode-backend-dev.herokuapp.com/";

   const auth = async (body) => {
      console.log(body)
      let res = await fetch(`${__apibase}auth/login`,  {
         method: 'POST',
         body: `${body}`, 
         headers: {
           'Content-Type': 'application/json'
         }});

      if (!res.ok) {
         throw new Error(`Could not fetch ${__apibase}, status ${res.status}`);
      }
      return await res.json();
   }

   const reg = async (body) => {
      console.log(body)
      let res = await fetch(`${__apibase}auth/register`,  {
         method: 'POST',
         body: `${body}`, 
         headers: {
           'Content-Type': 'application/json'
         }});

      if (!res.ok) {
         throw new Error(`Could not fetch ${__apibase}, status ${res.status}`);
      }
      return await res.json();
   }

   const logout = async () => {
      let res = await fetch(`${__apibase}auth/logout`,  {
         method: 'GET'
      });

      if (!res.ok) {
         throw new Error(`Could not fetch ${__apibase}, status ${res.status}`);
      }
      return await res.json();
   }

   return {reg, auth, logout}
}

export default Service