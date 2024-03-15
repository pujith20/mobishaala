import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/whatsapp.png";
import "./index.css";

const points = [
  {
    id: "1",
    details: "No technical knowledge required.",
  },
  {
    id: "2",
    details: "Quickly set up live class, tests, notes, ebooks, and more.",
  },
  {
    id: "3",
    details: "Reach out to millions of students anywhere, anytime.",
  },
];

const Home = () => {
  return (
    <div className="home-con">
      <div className="container">
        <div className="row d-flex justify-space-between">
          <div className="col-12 col-md-6 pt-5">
            <h1 className="text-white heading">Mobishaala</h1>
            <p className="text-white">
              Create your
              <span className="text-warning"> Digital Classroom</span> in 5min
              for
              <span className="text-warning"> FREE</span> & connect to 1+
              Million Students.
            </p>
            <div className="d-block d-md-none">
              <iframe
                className="video"
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/jg5d59ligW4?si=8poMFmshtisCaGSe"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <button className="btn btn-danger text-white w-25 align-self-center mt-2">
                Buy
              </button>
            </div>
            <ul className="d-none d-md-block col-md-12">
              {points.map((item) => (
                <li key={item.id} className="text-white">
                  {item.details}
                </li>
              ))}
            </ul>
            <div className="btn-con-1">
              <p className="text-white">Institute/Teacher</p>
              <button className="btn btn-danger text-white">Get Started</button>
            </div>
            <div className="btn-con-2">
              <p className="text-white">Student</p>
              <button className="btn btn-danger text-white">
                Download App
              </button>
            </div>
            <div className="btn-con-3">
              <button className="btn btn-success text-white">
                <div>
                <img src={logo} className="logo-img" alt="logo" />
                <p className="text-white">Talk to Us</p>
                </div>
              </button>
            </div>
            <div className="col-12 bg-danger d-block d-md-none details-con">
              <h1 className="text-white">Mobishaala</h1>
              <div className="vision-con">
                <span>Vision</span>
                <p>
                  Empower Institutions & Teachers with state-of-the-art digital
                  classroom Technology.
                </p>
              </div>
              <div className="address-con">
                <span>Address</span>
                <p>
                  <span>Registered Office: </span>804, 5th Cross, 9th main, 4th
                  Block Koramangala, Bangalore, Karnataka 560034
                </p>
                <p>
                  <span>Corporate Office: </span>293, Westend Marg, near Saket,
                  Saidulajab, New Delhi, 110030
                </p>
              </div>
            </div>
          </div>
          <div className="d-none d-md-block col-md-6 video-con">
            <iframe
              className="video"
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/jg5d59ligW4?si=8poMFmshtisCaGSe"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <button className="btn btn-danger text-white mt-2">Buy</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
