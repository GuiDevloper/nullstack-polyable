import Nullstack from 'nullstack';
import './Application.scss';
import Home from './Home';

class Application extends Nullstack {

  static async start(context) {
    await this.startProject(context);
  }

  static async startProject({ project }) {
    project.name = 'Polyable Tests';
    project.domain = 'localhost';
    project.color = '#D22365';
  }

  render() {
    return (
      <main>
        <Home route="/" />
      </main>
    )
  }

}

export default Application;