import Layout from "./Templates/Layout.jsx";

import HomeButton from './Component/Home.jsx';

import ReceiptTemplate from "./Templates/Receipt";

import "./App.css";
import { Route, useHistory } from "react-router-dom";
import TopupCellphoneDomain from './domains/TopupCellphone.jsx';
import TopupPinDomain from './domains/TopupPin.jsx';
import TopupTvDomain from './domains/TopupTv.jsx';
import UsersLoginDomain from "./domains/UsersLogin/UsersLogin"
import TopupTransport from "./domains/TopupTransport/TopupTransport"
import UpdateProfile from './domains/UpdateProfile/UpdateProfile.jsx';
import ResetUsernameDomain from "./domains/ResetUsernameDomain/ResetUsernameDomain"

function App() {
  const SVGCellphone = <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8.14286 12.6667V3.61905H1.80952V12.6667H8.14286ZM8.14286 0C8.62277 0 9.08303 0.190646 9.42238 0.529997C9.76173 0.869349 9.95238 1.32961 9.95238 1.80952V14.4762C9.95238 14.9561 9.76173 15.4164 9.42238 15.7557C9.08303 16.0951 8.62277 16.2857 8.14286 16.2857H1.80952C0.805238 16.2857 0 15.4714 0 14.4762V1.80952C0 1.32961 0.190646 0.869349 0.529997 0.529997C0.869349 0.190646 1.32961 0 1.80952 0H8.14286ZM13.119 0H17.6429C18.0028 0 18.348 0.142984 18.6025 0.397498C18.857 0.652012 19 0.997206 19 1.35714V4.07143C19 4.43137 18.857 4.77656 18.6025 5.03107C18.348 5.28559 18.0028 5.42857 17.6429 5.42857H14.4762L11.7619 8.14286V5.42857V1.35714C11.7619 0.997206 11.9049 0.652012 12.1594 0.397498C12.4139 0.142984 12.7591 0 13.119 0Z" fill="#006BEE"/>
  </svg>

  const SVGTV = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="24" height="24" fill="white"/>
  <path d="M21 17H3V5H21V17ZM21 3H3C2.46957 3 1.96086 3.21071 1.58579 3.58579C1.21071 3.96086 1 4.46957 1 5V17C1 17.5304 1.21071 18.0391 1.58579 18.4142C1.96086 18.7893 2.46957 19 3 19H8V21H16V19H21C21.5304 19 22.0391 18.7893 22.4142 18.4142C22.7893 18.0391 23 17.5304 23 17V5C23 4.46957 22.7893 3.96086 22.4142 3.58579C22.0391 3.21071 21.5304 3 21 3Z" fill="#006BEE"/>
  </svg>

  const  SVGPIN = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="24" height="24" fill="white"/>
  <path d="M22 12V20C22 20.5304 21.7893 21.0391 21.4142 21.4142C21.0391 21.7893 20.5304 22 20 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V12C1.73478 12 1.48043 11.8946 1.29289 11.7071C1.10536 11.5196 1 11.2652 1 11V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H6.17C6.06 5.69 6 5.35 6 5C6 4.20435 6.31607 3.44129 6.87868 2.87868C7.44129 2.31607 8.20435 2 9 2C10 2 10.88 2.5 11.43 3.24V3.23L12 4L12.57 3.23V3.24C13.12 2.5 14 2 15 2C15.7956 2 16.5587 2.31607 17.1213 2.87868C17.6839 3.44129 18 4.20435 18 5C18 5.35 17.94 5.69 17.83 6H21C21.5304 6 22.0391 6.21071 22.4142 6.58579C22.7893 6.96086 23 7.46957 23 8V11C23 11.2652 22.8946 11.5196 22.7071 11.7071C22.5196 11.8946 22.2652 12 22 12ZM4 20H11V12H4V20ZM20 20V12H13V20H20ZM9 4C8.73478 4 8.48043 4.10536 8.29289 4.29289C8.10536 4.48043 8 4.73478 8 5C8 5.26522 8.10536 5.51957 8.29289 5.70711C8.48043 5.89464 8.73478 6 9 6C9.26522 6 9.51957 5.89464 9.70711 5.70711C9.89464 5.51957 10 5.26522 10 5C10 4.73478 9.89464 4.48043 9.70711 4.29289C9.51957 4.10536 9.26522 4 9 4ZM15 4C14.7348 4 14.4804 4.10536 14.2929 4.29289C14.1054 4.48043 14 4.73478 14 5C14 5.26522 14.1054 5.51957 14.2929 5.70711C14.4804 5.89464 14.7348 6 15 6C15.2652 6 15.5196 5.89464 15.7071 5.70711C15.8946 5.51957 16 5.26522 16 5C16 4.73478 15.8946 4.48043 15.7071 4.29289C15.5196 4.10536 15.2652 4 15 4ZM3 8V10H11V8H3ZM13 8V10H21V8H13Z" fill="#006BEE"/>
  </svg>
  
  
  let history = useHistory();
  return (
    <div className="App">
      <Layout>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Route exact path={"/"} basename={process.env.PUBLIC_URL}>
            <HomeButton
              icon={SVGCellphone  }
              onClick={() => {
                history.push({
                  pathname: "cellphone_topup",
                });
              }}
            >
              Recarga de Celular
            </HomeButton>
            <HomeButton
              icon={SVGTV}
              onClick={() => {
                history.push({
                  pathname: "tv_topup",
                });
              }}
            >
              Recarga de <br /> TV
            </HomeButton>
            <HomeButton
              icon={SVGTV}
              onClick={() => {
                history.push({
                  pathname: "transport_topup",
                });
              }}
            >
              Recarga de <br /> Transporte
            </HomeButton>
            <HomeButton
              icon={SVGPIN}
              onClick={() => {
                history.push({
                  pathname: "pin_topup"                  
                });
              }}
            >
              Recarga de <br /> PIN
            </HomeButton>
          </Route>
          
          {/* ROUTES 
            cellphone_topup
            pin_topup
            rv_topup
            receipt
          */}
          <Route path="/login">
            <UsersLoginDomain />
          </Route>

          <Route path="/update_profile">
            <UpdateProfile />
          </Route>

          <Route path="/cellphone_topup">
            <TopupCellphoneDomain />
          </Route>

          <Route path="/pin_topup">
            <TopupPinDomain />
          </Route>

          <Route path="/tv_topup">
            <TopupTvDomain />
          </Route>

          <Route path="/transport_topup">
            <TopupTransport />
          </Route>

          <Route path="/receipt">
            <ReceiptTemplate />
          </Route>
          <Route path="/resetUsername">
            <ResetUsernameDomain />
          </Route>
        </div>
      </Layout>
    </div>
  );
}

export default App;
