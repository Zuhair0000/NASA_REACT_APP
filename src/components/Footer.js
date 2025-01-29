export default function Footer({ handleShowModal, data }) {
  return (
    <footer>
      <div className="bgGradient"></div>
      <div>
        <h2>{data?.title}</h2>
        <h1>APOD PROJECT</h1>
      </div>
      <button onClick={handleShowModal}>
        <i className="fa-solid fa-circle-info"></i>
      </button>
    </footer>
  );
}
