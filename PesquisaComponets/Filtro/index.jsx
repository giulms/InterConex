import styles from './Filtro.module.css'
import Botao from './BotaoFiltro';
function Filtro() {
  return (
    <div className={styles.filtroContainer}>
      <Botao texto = 'Pessoas'/>
      <Botao texto = 'Publicações'/>
      <Botao texto = 'Startups'/>
      <Botao texto = 'Empresas'/>
      <Botao texto = 'Vagas'/>
      <Botao texto = 'Freelancers'/>
      |
      <Botao texto = 'Todos os Filtros'/>
    </div>
  )
}

export default Filtro;