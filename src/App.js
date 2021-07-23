
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
            Open-source code onn
             <a
                href="https://github.com/lirosm/dictionary-project"
                target="_blank"
                rel="noreferrer"
              >  
                GitHub
              </a>
         , coded by Liridona Osmani, 
   
               hosten on <a  href="https://vigorous-hawking-15099f.netlify.app/"
                target="_blank"
                rel="noreferrer"
                > Netlify
                </a>
            </small>
        </footer>
      </div>
    </div>
  );
}