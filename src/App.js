import "./App.css";

import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import axios from "axios";

function App() {
  const login = useGoogleLogin({
    onSuccess: async (respose) => {
      try {
        const data = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${respose.access_token}`,
            },
          }
        );
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <div className="App">
      <button onClick={login}>continue wit google</button>
      {/* <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse.credential);
          var decoded = jwt_decode(credentialResponse.credential);
          console.log(decoded);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      /> */}
      ;
    </div>
  );
}

export default App;

// import "./App.css";
// import useEffect from "react";

// function App() {
//   function handleCallbackResponse(response) {
//     console.log("ENCODED JWT ID TOKEN :" + response.credential);
//     return { hasError: true };
//   }

//   useEffect(() => {
//     google.accounts.id.initialize({
//       client_id:
//         "325620568220-02ssepnids5pavaag2d54tak9puc4gs2.apps.googleusercontent.com",
//       callback: handleCallbackResponse,
//     });
//     google.accounts.id.renderButton(document.getElementById("signInDiv"), {
//       theme: "outline",
//       size: "large",
//     });
//   }, []);

//   return(
//   <div className="App">
//     <div id="signInDiv"></div>
//   </div>
//   )
// }

// export default App;
