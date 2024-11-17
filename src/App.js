import './App.css';
import React, { useState } from 'react';
import News from './Components/News';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = ()=> {
  
  const pageSize = 16
   const apiKey = process.env.REACT_APP_NEWS_API_KEY;
  const getBadgeColor = (category) => {
    const colors = {
      general: "primary",
      business: "success",
      entertainment: "danger",
      health: "warning",
      science: "info",
      sports: "success",
      technology: "secondary",
    };
    return colors[category] || "primary";
  };
  const [progress , setprogress] = useState(0);

    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
        color='#f11946'
        progress={progress}/>
          <Routes>
            <Route path="/" element={<News setprogress={setprogress} key="general" apiKey={apiKey} pageSize={pageSize} country="us" category="general" badgecolor={getBadgeColor} />} />
            <Route path="/business" element={<News setprogress={setprogress} key="business" apiKey={apiKey} pageSize={pageSize} country="us" category="business" badgecolor={getBadgeColor}/>} />
            <Route path="/entertainment" element={<News setprogress={setprogress} key="entertainment" apiKey={apiKey} pageSize={pageSize} country="us" category="entertainment" badgecolor={getBadgeColor} />} />
            <Route path="/health" element={<News setprogress={setprogress} key="health" apiKey={apiKey} pageSize={pageSize} country="us" category="health" badgecolor={getBadgeColor}/>} />
            <Route path="/science" element={<News setprogress={setprogress} key="science" apiKey={apiKey} pageSize={pageSize} country="us" category="science" badgecolor={getBadgeColor} />} />
            <Route path="/sports" element={<News setprogress={setprogress} key="sports" apiKey={apiKey} pageSize={pageSize} country="us" category="sports" badgecolor={getBadgeColor} />} />
            <Route path="/technology" element={<News setprogress={setprogress} key="technology" apiKey={apiKey} pageSize={pageSize} country="us" category="technology" badgecolor={getBadgeColor} />} />
          </Routes>
        </Router>
      </div>
    )
  
}
export default App;