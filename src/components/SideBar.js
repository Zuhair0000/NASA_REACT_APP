export default function SideBar({ handleShowModal, data }) {
  return (
    <div className="sidebar">
      <div onClick={handleShowModal} className="bgOverlay"></div>
      <div className="sidebarContainer">
        <h2>{data?.title}</h2>
        <div className="descriptionContainer">
          <p className="descriptionTitle">{data?.date}</p>
          <p>{data?.explanation}</p>
        </div>
        <button onClick={handleShowModal}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}
