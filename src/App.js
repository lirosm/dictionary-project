
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Dictionary defaultKeyword="Sunset" />
        </main>
        <footer className="App-footer">
          <small>
             <a
                href="https://github.com/lirosm/Vanilla-weather-app"
                target="_blank"
                rel="noreferrer"
              >  
              Open-source code  
              </a>
         , by Liridona Osmani 
         <a  href="https://github.com/lirosm/Vanilla-weather-app"
                target="_blank"
                rel="noreferrer"
                >
                  , hosten on Netlify
                </a>
            </small>
        </footer>
      </div>
    </div>
  );
}