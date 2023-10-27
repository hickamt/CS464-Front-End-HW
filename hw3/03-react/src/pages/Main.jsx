import Header from "../components/Header";
import MainBody from "../components/MainBody";

function Main() {
  return (
    <>
      <div className="dashboard-container text-center mt-3">
        <Header title={"Game Of Thrones"}/>
        <MainBody />
      </div>
    </>
  );
}

export default Main;
