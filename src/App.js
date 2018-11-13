import React, { Component } from "react";
import PrismCode from "react-prism";

class App extends Component {
  
  render() {
    let java = 'String name = "Joan Vasquez";\nSystem.out.println(name);';
    let javascript = 'let name = "Joan Vasquez;\nconsole.log(name)";';
    let html = '<div>\n    <p>\n      Joan Vasquez\n    </p>\n</div>';
    let css = '.container {\n   background-color: "#000";\n}';

    return (
      <div className="App">
        <h2>Java</h2>
        <pre>
          <PrismCode className="language-java">
            {java}
          </PrismCode>
        </pre>

        <h2>JavaScript</h2>
        <pre>
          <PrismCode className="language-javascript">
            {javascript}
          </PrismCode>
        </pre>

        <h2>Html</h2>
        <pre>
          <PrismCode className="language-html">
            {html}
          </PrismCode>
        </pre>

        <h2>Css</h2>
        <pre>
          <PrismCode className="language-css">
            {css}
          </PrismCode>
        </pre>

      </div>
    );
  }
}

export default App;
