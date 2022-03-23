# react-progressbar-loader-circle
react-progressbar-loader-circle provides a fully customizable and simple component for rendering a progressBar.

## Installation
``` npm i react-progressbar-loader-circle ```

## Getting started with react-progressbar-loader-circle
react-progressbar-loader-circle is a react component that renders a progressBar. A progressBar is essential when fetching data from API's due to the time delay between the request and response. You can utilize the progressBar to show system status during the delay between requests.

```javascript
//import progressBar from react-progressbar-loader-circle
import { ProgressBar } from "react-progressbar-loader-circle"

function App() {
  return (
    <div className="App">
      //Render default progress bar
      <ProgressBar/>
    </div>
  );
}

export default App;
```
![default progress bar image](https://raw.githubusercontent.com/ray3du/react-progressbar-loader/main/src/public/default_loader.png)

react-progressbar-loader-circle allows the developer to customize the progressBar depending on his/her needs. 
#### Customizable elements
- width ```default 48px```
- height ```default 48px```
- borderColor ```default aqua```
- borderWidth ```default 8px```
- borderTopColor ```default white```
- borderTopWidth ```default 8px```

Example of customized progress bar
```javascript
//import progressBar from react-progressbar-loader-circle
import { ProgressBar } from "react-progressbar-loader-circle"

function App() {
  return (
    <div className="App">
      //Render default progress bar
      <ProgressBar
        width={"60px"}
        height={"60px"}
        borderColor={"#FFFFFF"}
        borderWidth={"10px"}
        borderTopColor={"#FA8072"}
        borderTopWidth={"10px"}
      />
    </div>
  );
}

export default App;
```
![modified progress bar image](https://raw.githubusercontent.com/ray3du/react-progressbar-loader/main/src/public/modefied_loader.png)

# Happy hacking
