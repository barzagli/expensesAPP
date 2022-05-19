import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from '@apollo/client';

import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';


const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl3apbp1w0z8e01xi0dbn1whq/master',
  cache: new InMemoryCache(),
  headers:{
    Authorization:
      'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NTI5MjMzNjIsImF1ZCI6WyJodHRwczovL2FwaS1zYS1lYXN0LTEuZ3JhcGhjbXMuY29tL3YyL2NsM2FwYnAxdzB6OGUwMXhpMGRibjF3aHEvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiMjI3MWQ3NjUtNzZhYS00YThhLTk1YjctYTQyNjY5N2Q1OGQzIiwianRpIjoiY2wzY2J3NWF2MGVlcTAxejQwMms0MXR1eiJ9.fZAk-H_5nilnOAGoQpsnedY-RWD7AQ0LxknLj0Mj0J2iEOXZBq3E-NyFZwNTf6_gXXVwNtSbQJNY8MIKtYoG-rb2EosKkVg1Mw0hjvG6Slxs122GWPP4v4_tmkquyrmcqDyPNqpHnL-xbGtJeFVs2f9xE10oWCG-PmfP-A-OIYegigkEEs7ACvhfUeBv8tEj_zMT5g17PrKZ2AWMbV4wI_gJ10mFBhTWmMozIvyQYEworyPXowZt6WHHoDFvJApe0SDX9YLrBzuvVbal3xM33pjpmB8hbccNTWXXWyEWgvd2zu_V4jkh6aI9lj-r4Bz6EKIY9gxMlP61ZFLeDfjnh2KQdXJ_SLTeBO95DsudxDkyjlfpBIGPnVK-jPVVXWgTgWt8m3F9kOlR8gO6UU_-3p5NO0tRh2Jir0PLSDg1t5UqfLDntYsR8eSMrOtrhoIDMCHV1DNB9ygK78dDbr-zj_MEFwawaGItfvGeum_O5GHEDFKNccHiaIA1gkeqQxlEqAii1ToQY8hLWsucBUZPEOc-t-MBfLX9ojj4IYe0JkmtnPjAUtmV0kforf4jZ1W0O77NOOfqhwd1okqjyHVWAXi_FBX2MAtSrJflD7Waw3hTLJTe8S0uSSvBfG68YS5WTZGOoXbAsriT5aMYuGZ8k5TDQ-kd6PIxTLKId6Ss70s',
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </ApolloProvider>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
