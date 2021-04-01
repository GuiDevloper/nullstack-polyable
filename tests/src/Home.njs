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
    const { exibe } = this;
    return (
      <>
        <div class="nullstack-logo">
          <Logo light />
        </div>
        <botão aoclicar={exibe} ação="clicado!">
          Clique aqui
        </botão>
        <entrada aoteclar={exibe} ação="digitado!" />
      </>
    )
  }
  prepare = this.prepara;
  render = this.renderiza;
}

export default Home;