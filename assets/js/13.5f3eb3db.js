(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{376:function(e,t,r){"use strict";r.r(t);var a=r(42),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"quick-start"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#quick-start"}},[e._v("#")]),e._v(" Quick start")]),e._v(" "),r("p",[e._v("The Starter Package is an example that you can use as a starting point for developing your SubQuery project.\nA SubQuery package defines which data The SubQuery will index from the Substrate blockchain, and how it will store it.")]),e._v(" "),r("h2",{attrs:{id:"preparation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#preparation"}},[e._v("#")]),e._v(" Preparation")]),e._v(" "),r("h4",{attrs:{id:"environment"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#environment"}},[e._v("#")]),e._v(" Environment")]),e._v(" "),r("ul",[r("li",[r("p",[r("a",{attrs:{href:"https://www.typescriptlang.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Typescript"),r("OutboundLink")],1),e._v(" are required to compile project and define types.")])]),e._v(" "),r("li",[r("p",[e._v("Both SubQuery CLI and generated Project have dependencies and require "),r("a",{attrs:{href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node"),r("OutboundLink")],1),e._v(".")])])]),e._v(" "),r("h4",{attrs:{id:"install-the-subquery-cli"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#install-the-subquery-cli"}},[e._v("#")]),e._v(" Install the SubQuery CLI")]),e._v(" "),r("p",[e._v("Install SubQuery CLI globally on your terminal by using Yarn or NPM:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("npm install -g @subql-cli\nyarn global add @subql-cli\n")])])]),r("p",[e._v("Run help to see available commands and usage provide by CLI")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("suqbl help\n")])])]),r("h2",{attrs:{id:"initialize-the-starter-package"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#initialize-the-starter-package"}},[e._v("#")]),e._v(" Initialize the starter package")]),e._v(" "),r("p",[e._v("Inside the directory in which you want to create the SubQuery project, simply replace "),r("code",[e._v("project-name")]),e._v(" with your project name and run the command:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("subql init --starter project-name\n")])])]),r("p",[e._v("Then you should see a folder with your project name has been created inside the directory, you can use this as the start point of your project. And the files should be identical as in the "),r("a",{attrs:{href:"/directory_structure"}},[e._v("Directory Structure")]),e._v(".")]),e._v(" "),r("p",[e._v("Last, under the project directory, run following command to install all the dependency.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("yarn install\n")])])]),r("h2",{attrs:{id:"configure-your-project"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#configure-your-project"}},[e._v("#")]),e._v(" Configure your project")]),e._v(" "),r("p",[e._v("In the starter package, we have provided a simple example of project configuration. You will be mainly working on the following files:")]),e._v(" "),r("ul",[r("li",[e._v("The Manifest in "),r("code",[e._v("project.yaml")])]),e._v(" "),r("li",[e._v("The GraphQL Schema in "),r("code",[e._v("schema.graphql")])]),e._v(" "),r("li",[e._v("The Mapping functions in "),r("code",[e._v("src/mappings/")]),e._v(" directory")])]),e._v(" "),r("p",[e._v("For more information on how to write the SubQuery,\ncheck out our doc section on "),r("a",{attrs:{href:"/define_a_subquery"}},[e._v("Define the SubQuery")])]),e._v(" "),r("h4",{attrs:{id:"code-generation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#code-generation"}},[e._v("#")]),e._v(" Code generation")]),e._v(" "),r("p",[e._v("In order to index your SubQuery project, it is mandatory to build your project first.\nRun this command under the project directory.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("yarn build\n")])])]),r("h2",{attrs:{id:"build-the-project"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#build-the-project"}},[e._v("#")]),e._v(" Build the project")]),e._v(" "),r("p",[e._v("In order to deploy your SubQuery project to our hosted service, it is mandatory to pack your configuration before upload.\nRun pack command from root directory of your project will automatically generate a "),r("code",[e._v("your-project-name.tgz")]),e._v(" file.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("yarn build\n")])])]),r("h2",{attrs:{id:"indexing-and-query"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#indexing-and-query"}},[e._v("#")]),e._v(" Indexing and Query")]),e._v(" "),r("h4",{attrs:{id:"run-required-systems-in-docker"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#run-required-systems-in-docker"}},[e._v("#")]),e._v(" Run required systems in docker")]),e._v(" "),r("p",[e._v("Then, under the project directory run following command:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("docker-compose up\n")])])]),r("h4",{attrs:{id:"query-the-project"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#query-the-project"}},[e._v("#")]),e._v(" Query the project")]),e._v(" "),r("p",[e._v("Open your browser and head to "),r("code",[e._v("http://localhost:8080/console")]),e._v(".")]),e._v(" "),r("p",[e._v("Under the "),r("code",[e._v("DATA")]),e._v(" tab, on the left top corner select the schema you just created, it usually named "),r("code",[e._v("public")]),e._v(".\nThen you can see the table is currently untracked, click on the "),r("code",[e._v("Track")]),e._v(" button.")]),e._v(" "),r("p",[e._v("Finally, head to the "),r("code",[e._v("GRAPHQL")]),e._v(" tab, in the explorer you should see the table is ready to query.")])])}),[],!1,null,null,null);t.default=n.exports}}]);