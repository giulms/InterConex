import styles from './MainContent.module.css'

function MainContent() {
  return (
    <div className="main-content">
      <div className="create-post">
        <img src="/user-avatar.png" alt="User Avatar" className="avatar" />
        <input type="text" placeholder="Comece uma publicação" />
        <div className="post-actions">
          <button>Serviço</button>
          <button>Mídia</button>
          <button>Vaga</button>
        </div>
      </div>
      <div className="post">
        <div className="post-header">
          <img src="/user-avatar.png" alt="User Avatar" className="avatar" />
          <div className="user-info">
            <h3>Usuário</h3>
            <p>Descrição do usuário | 1h</p>
          </div>
          <button className="follow-button">Seguir</button>
        </div>
        <p className="post-content">Conteúdo da publicação...</p>
        <div className="post-images">
          <img src="/post-image-1.png" alt="Post Image 1" />
          <img src="/post-image-2.png" alt="Post Image 2" />
          <img src="/post-image-3.png" alt="Post Image 3" />
        </div>
        <div className="post-stats">
          <span>0 curtidas</span>
          <span>0 Comentários</span>
        </div>
      </div>
    </div>
  );
}

export default MainContent;