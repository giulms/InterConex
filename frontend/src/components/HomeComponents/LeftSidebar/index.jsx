import styles from './LeftSidebar.module.css'

function LeftSidebar() {
  return (
    <div className="left-sidebar">
      <div className="ranking">
        <h2>Ranking de Empresas</h2>
        {[1, 2, 3, 4, 5].map((num) => (
          <div key={`company-${num}`} className="ranking-item">
            <img src={`/company-${num}.png`} alt={`Company ${num}`} />
            <span>Empresa</span>
            <span className="position">{num}st</span>
          </div>
        ))}
        <button className="view-all">Ver tudo...</button>
      </div>
      <div className="ranking">
        <h2>Ranking de Startups</h2>
        {[1, 2, 3, 4, 5].map((num) => (
          <div key={`startup-${num}`} className="ranking-item">
            <img src={`/startup-${num}.png`} alt={`Startup ${num}`} />
            <span>Startup</span>
            <span className="position">{num}st</span>
          </div>
        ))}
        <button className="view-all">Ver tudo...</button>
      </div>
    </div>
  );
}

export default LeftSidebar;