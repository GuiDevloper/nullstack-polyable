import Nullstack from 'nullstack';
import Logo from 'nullstack/logo';

class Home extends Nullstack {

  prepara({ project, page }) {
    page.title = `${project.name} - Nulla-chan te dá as boas vindas!`;
    page.description = `${project.name} foi feito com Nullstack`;
    page.locale = 'pt-BR';
  }

  exibe({ ação }) {
    console.log(ação);
  }

  renderiza() {
    return (
      <>
        <div class="nullstack-logo">
          <Logo light />
        </div>
        <botão aoclicar={this.console} ação="clicado!">
          Clique aqui
        </botão>
        <entrada aoteclar={this.console} ação="digitado!" />
      </>
    )
  }
  prepare = this.prepara;
  console = this.exibe;
  render = this.renderiza;
}

export default Home;