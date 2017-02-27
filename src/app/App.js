import React, { Component } from 'react';
import ToolBar from './components/ToolBar.jsx';
import Loading from './components/loading/Loading.jsx';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/javascript/javascript';

import './App.css';
import 'codemirror/lib/codemirror.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      gists: [],
      activeProject: null,
      activeFile: null,
      openingFile: null,
      loading: true,
      users: []
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        username: 'ShaunLloyd',
        imageUrl: 'https://avatars0.githubusercontent.com/u/18172605?v=3&s=460',
        isOwner: true,
        loading: false,
        users: [
          {username: 'ShaunLloyd', imageUrl: 'https://avatars0.githubusercontent.com/u/18172605?v=3&s=460'},
          {username: 'pearEdit', imageUrl: 'https://avatars0.githubusercontent.com/u/21376429?v=3&s=460'}
        ]
      })
    }, 2000);
  }
  render() {
    return (
      <div>
        <ToolBar
          username={this.state.username}
          imageUrl={this.state.imageUrl}
          users={this.state.users}
          activeFile={this.state.activeFile}
          isOwner={this.state.isOwner}
        />
        <div className='codemirror-container'>
          <CodeMirror
            id='editor-container'
            options={{lineNumbers: true, mode: 'javascript'}}
          />
        </div>

        {this.state.loading ? <Loading/> : null}
      </div>

    );
  }
}

export default App;
