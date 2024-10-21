import styles from './MainContent.module.css'

export default function MainContent() {
  return (
    <div className={styles['main-content']}>
      <div className={styles['create-post']}>
        <img src="/placeholder.svg?height=40&width=40" alt="User Avatar" className={styles.avatar} />
        <input type="text" placeholder="Comece uma publicação" />
        <div className={styles['post-actions']}>
          <button>Serviço</button>
          <button>Mídia</button>
          <button>Vaga</button>
        </div>
      </div>
      <div className={styles.post}>
        <div className={styles['post-header']}>
          <img src="/placeholder.svg?height=40&width=40" alt="User Avatar" className={styles.avatar} />
          <div className={styles['user-info']}>
            <h3>Usuário</h3>
            <p>Descrição do usuário | 1h</p>
          </div>
          <button className={styles['follow-button']}>Seguir</button>
        </div>
        <p className={styles['post-content']}>Conteúdo da publicação...</p>
        <div className={styles['post-images']}>
          <img src="/placeholder.svg?height=200&width=200" alt="Post Image 1" />
          <img src="/placeholder.svg?height=200&width=200" alt="Post Image 2" />
          <img src="/placeholder.svg?height=200&width=200" alt="Post Image 3" />
        </div>
        <div className={styles['post-stats']}>
          <span>0 curtidas</span>
          <span>0 Comentários</span>
        </div>
      </div>
    </div>
  )
}