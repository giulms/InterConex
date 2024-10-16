import styles from './RightSidebar.module.css'

function RightSidebar() {
  return (
    <div className="right-sidebar">
      <h2>Sugestões para você</h2>
      {[1, 2, 3, 4, 5].map((num) => (
        <div key={`suggestion-${num}`} className="suggestion-item">
          <img src={`/suggestion-${num}.png`} alt={`Suggestion ${num}`} />
          <div className="suggestion-info">
            <h3>Usuário</h3>
            <p>Descrição do usuário</p>
          </div>
          <button className="visit-button">Visitar</button>
        </div>
      ))}
      <button className="view-all">Ver tudo...</button>
    </div>
  );
}

export default RightSidebar;