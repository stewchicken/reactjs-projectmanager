import React, { Component } from 'react';
import Projects from './components/Projects'
import AddProject from './components/AddProject';
import uuid from 'uuid';
import $ from 'jquery';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)}></AddProject>
        <Projects projects={this.state.projects}
          onDelete={this.handleDeleteProject.bind(this)}
        />
      </div>
    );
  }

  constructor() {
    super();
    this.state = {
      projects: [],
      todos: []
    }
    console.log("App constructor()");
  }


  // life cycle method, it will be fire when component (re)rendered
  // componentDidMount()
  componentWillMount() {

    console.log("App componentWillMount()");
    this.getProjects();
    this.getTodos();
  }

  getProjects() {
    this.setState(
      {
        projects: [
          {
            id: uuid.v4(),
            title: 'Business Webiste',
            category: 'Mobile Development'
          },
          {
            id: uuid.v4(),
            title: 'Social App',
            category: 'Mobile Development'
          },
          {
            id: uuid.v4(),
            title: 'Ecommerce Shopping Cart',
            category: 'Mobile Development'
          }

        ]

      }
    );
  }
  getTodos() {
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      dataType: 'json',
      cache: false,
      success: function (data) {
        //setState callback
        this.setState({ todos: data }, function () {
          console.log(this.state);
        });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
      }
    }
    );
  }

  componentDidMount() {


  }

  // this is callback hook between APP and AddProject
  handleAddProject(newproject) {
    let projects = this.state.projects;
    projects.push(newproject);
    this.setState({ projects: projects });
  }

  handleDeleteProject(id) {
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({ projects: projects });


  }


}

export default App;
