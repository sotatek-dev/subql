(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{374:function(e,t,a){"use strict";a.r(t);var r=a(42),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"indexing-and-query"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#indexing-and-query"}},[e._v("#")]),e._v(" Indexing and Query")]),e._v(" "),a("p",[e._v("In this chapter, we will introduce how to indexing a configured SubQuery, there are two approaches:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("We support "),a("a",{attrs:{href:"https://www.subquery.network/",target:"_blank",rel:"noopener noreferrer"}},[e._v("hosted service"),a("OutboundLink")],1),e._v("(coming soon) for the SubQuery node.")])]),e._v(" "),a("li",[a("p",[e._v("Running a SubQuery node for local development")])])]),e._v(" "),a("p",[e._v("An alternative indexing solution with "),a("strong",[e._v("docker")]),e._v(" has provided in the "),a("RouterLink",{attrs:{to:"/quickstart.html#index-and-query"}},[e._v("Quick start")]),e._v(" chapter.")],1),e._v(" "),a("h2",{attrs:{id:"preparation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preparation"}},[e._v("#")]),e._v(" Preparation")]),e._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"https://www.postgresql.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Postgres"),a("OutboundLink")],1),e._v(" database 12 or higher.\nAs after "),a("a",{attrs:{href:"#start-a-local-subquery-node"}},[e._v("SubQuery node")]),e._v(" indexing the blockchain, extracted data need to store in in an external database instance.")])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://hasura.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Hasura"),a("OutboundLink")],1),e._v(" provide an instant, realtime GraphQL APIs over the Postgres. It will meet the current demands of interacting with stored chain data in database.")])])]),e._v(" "),a("h2",{attrs:{id:"start-a-local-subquery-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#start-a-local-subquery-node"}},[e._v("#")]),e._v(" Start a local SubQuery node")]),e._v(" "),a("p",[e._v("SubQuery node is an implementation that extract substrate-based blockchain data which designated from a SubQuery project, and update it into a Postgres database.")]),e._v(" "),a("h3",{attrs:{id:"install-it-globally"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-it-globally"}},[e._v("#")]),e._v(" Install it globally")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("npm install -g @subql/node\n")])])]),a("p",[e._v("Once installation completed, you can execute it.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("subql-node <command>\n")])])]),a("h3",{attrs:{id:"command-line"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#command-line"}},[e._v("#")]),e._v(" Command-Line")]),e._v(" "),a("p",[e._v("The following crucial commands will assist you to complete the configuration of SubQuery node and begin indexing.\nTo find out more available option, run "),a("code",[e._v("--help")]),e._v(".")]),e._v(" "),a("h4",{attrs:{id:"point-to-local-project-path"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#point-to-local-project-path"}},[e._v("#")]),e._v(" Point to local project path")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("subql-node -f your-project-path \nsubql-node -f your-project-tar.tgz\n")])])]),a("p",[e._v("The acceptable project path can be either a directory or "),a("RouterLink",{attrs:{to:"/define_a_subquery.html#pack"}},[e._v("packed project")]),e._v(".")],1),e._v(" "),a("h4",{attrs:{id:"connect-to-database"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connect-to-database"}},[e._v("#")]),e._v(" Connect to database")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("export DB_USER=postgres \nexport DB_PASS=postgres \nexport DB_DATABASE=postgres \nexport DB_HOST=postgres \nexport DB_POST=5432\nsubql-node -f your-project-path \n")])])]),a("p",[e._v("Depend on the setup configuration of your Postgres database, e.g. a different database password, to make sure the query node able to establish\nconnection to it, it will be mandatory to pass correct environment variables within the command.")]),e._v(" "),a("h4",{attrs:{id:"specify-a-configuration-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specify-a-configuration-file"}},[e._v("#")]),e._v(" Specify a configuration file")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("subql-node -c your-project-config.yml\n")])])]),a("p",[e._v("This will point the query node to a configure file which can be in YAML or JSON format, check out the example below.")]),e._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("subquery")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" ../../../../subql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("example/extrinsics\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("subqueryName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" extrinsics\nbatchSize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("100")]),e._v("\nlocalMode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token boolean important"}},[e._v("true")]),e._v("\n")])])]),a("h4",{attrs:{id:"change-the-block-fetching-batch-size"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#change-the-block-fetching-batch-size"}},[e._v("#")]),e._v(" Change the block fetching batch size")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("subql-node -f your-project-path --batch-size 200\n\nResult:\n[IndexerManager] fetch block [203, 402]\n[IndexerManager] fetch block [403, 602]\n")])])]),a("p",[e._v("While indexer is idle and waiting data to process, fetch single block per time will significantly drawback the query node performance.\nTherefore, increasing the batch-size to adjust the number of blocks fetch per time and increasing the preload will enhance the overall processing time.\nCurrently default batch-size been set to 100.")]),e._v(" "),a("h4",{attrs:{id:"local-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#local-mode"}},[e._v("#")]),e._v(" Local mode")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("subql-node -f your-project-path --local\n")])])]),a("p",[e._v("For the development debugging purpose, user can run the node in local mode. Switch to local model will create tables in default schema "),a("code",[e._v("public")]),e._v(".")]),e._v(" "),a("p",[e._v("If not using local mode, it will create a new schema with the initial "),a("code",[e._v("subquery_")]),e._v(" and corresponding project tables.")]),e._v(" "),a("h2",{attrs:{id:"query"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#query"}},[e._v("#")]),e._v(" Query")]),e._v(" "),a("p",[e._v("After running Hasura successfully,open your browser and head to "),a("code",[e._v("http://localhost:8080/console")]),e._v(".")]),e._v(" "),a("p",[e._v("Under the "),a("code",[e._v("DATA")]),e._v(" tab, on the left top corner select the schema you just created, it usually named "),a("code",[e._v("public")]),e._v(" if you used local mode, and "),a("code",[e._v("subquery_x")]),e._v(" if not.")]),e._v(" "),a("p",[e._v("Then you can see the table is currently untracked, click on the "),a("code",[e._v("Track")]),e._v(" button.")]),e._v(" "),a("p",[e._v("Finally, head to the "),a("code",[e._v("GRAPHQL")]),e._v(" tab, in the explorer you should see the table is ready to query.")])])}),[],!1,null,null,null);t.default=n.exports}}]);