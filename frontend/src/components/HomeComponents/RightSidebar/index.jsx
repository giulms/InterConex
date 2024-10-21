import styles from './RightSidebar.module.css'

export default function RightSidebar() {
  return (
    <div className={styles['right-sidebar']}>
      <h2>Sugestões para você</h2>
      {[1, 2, 3, 4, 5].map((num) => (
        <div key={`suggestion-${num}`} className={styles['suggestion-item']}>
          <img src={`/placeholder.svg?height=40&width=40`} alt={`Suggestion ${num}`} />
          <div className={styles['suggestion-info']}>
            <h3>Usuário</h3>
            <p>Descrição do usuário</p>
          </div>
          <button className={styles['visit-button']}>Visitar</button>
        </div>
      ))}
      <button className={styles['view-all']}>Ver tudo...</button>
    </div>
  )
}