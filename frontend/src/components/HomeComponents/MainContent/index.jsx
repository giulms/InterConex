import styles from './MainContent.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export default function MainContent() {
  return (
    <div className={styles['main-content']}>
      <div className={styles['create-post']}>
        <div className= {styles['img-and-start']}>
        <img src="/placeholder.svg?height=40&width=40" alt="" className={styles['avatar']}/>
        <input type="text" placeholder="Comece uma publicação"/>
        </div>
        <div className={styles['create-post-actions']}>
          <div className={styles['service-button']}>
          <img src="/placeholder.svg?height=40&width=40" alt="" className={styles['avatar']} />
          <p className={styles['inner-text']}>Serviço</p>
          </div>
          <div className={styles['media-button']}>
          <img src="/placeholder.svg?height=40&width=40" alt="" className={styles['avatar']} />
          <p className={styles['inner-text']}>Mídia</p>
          </div>
          <div className={styles['job-button']}>
          <img src="/placeholder.svg?height=40&width=40" alt="" className={styles['avatar']}/>
          <p className={styles['inner-text']}>Vaga</p>
          </div>
        </div>
      </div>

      <div className={styles['post']}>
        <div className={styles['post-header']}>
          <img src="/placeholder.svg?height=40&width=40" alt="User Avatar" className={styles['avatar']} />
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