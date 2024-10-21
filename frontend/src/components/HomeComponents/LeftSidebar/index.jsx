import styles from './LeftSidebar.module.css'

export default function LeftSidebar() {
  return (
    <div className={styles['left-sidebar']}>
      <div className={styles.ranking}>
        <h2>Ranking de Empresas</h2>
        {[1, 2, 3, 4, 5].map((num) => (
          <div key={`company-${num}`} className={styles['ranking-item']}>
            <img src={`/placeholder.svg?height=30&width=30`} alt={`Company ${num}`} />
            <span>Empresa</span>
            <span className={styles.position}>{num}st</span>
          </div>
        ))}
        <button className={styles['view-all']}>Ver tudo...</button>
      </div>
      <div className={styles.ranking}>
        <h2>Ranking de Startups</h2>
        {[1, 2, 3, 4, 5].map((num) => (
          <div key={`startup-${num}`} className={styles['ranking-item']}>
            <img src={`/placeholder.svg?height=30&width=30`} alt={`Startup ${num}`} />
            <span>Startup</span>
            <span className={styles.position}>{num}st</span>
          </div>
        ))}
        <button className={styles['view-all']}>Ver tudo...</button>
      </div>
    </div>
  )
}
