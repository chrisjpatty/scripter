import React from "react";
import useFiler from "./hooks/useFiler";
import { Route, Redirect } from "react-router-dom";
import Files from "./pages/Files";
import Edit from "./pages/Edit";
import "normalize.css";
import "./App.css";

const App = ({ history }) => {
  const [
    files,
    { add: addFile, remove: removeFile, update: updateFile }
  ] = useFiler("FILES");

  const startNewFile = () => {
    const newFileId = addFile({
      title: "",
      blocks: [],
      speakers: []
    });
    history.push(`/edit/${newFileId}`);
  };

  return (
    <div className="App">
      <Route exact path="/" render={() => <Redirect to="/files" />} />
      <Route
        exact
        path="/files"
        render={props => (
          <Files {...props} files={files} onNewFileRequested={startNewFile} />
        )}
      />
      <Route
        exact
        path="/edit/:fileId"
        render={props => {
          const file = files[props.match.params.fileId];
          return (
            <Edit
              {...props}
              file={file}
              onFileEdited={newFile => {
                updateFile(file.id, prev =>
                  typeof newFile === "function" ? newFile(prev) : newFile
                );
              }}
            />
          );
        }}
      />
    </div>
  );
};

export default App;
