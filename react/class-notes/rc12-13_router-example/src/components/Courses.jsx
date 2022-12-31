
import courses from "../data"

const Courses = () => {
    return (
        <div className="container text-center mb-5 p-4">
            <h2>OUR COURSES</h2>
            <div className="row justify-content-center gap-4 aign-items-center mt-1">
                {courses?.map((course) => {
                    const { id, img, name, text } = course;
                    return (
                        <div className="col d-flex justify-content-center " key={id}>
                            <div className="card" style={{ width: "18rem" }}>
                                <img className="card-img-top p-4" src={img} alt="" />
                                <div className="card-body">
                                    <h5 className="card-title">{name}</h5>
                                    <p className="card-text">{text}</p>
                                    <button className="btn btn-danger">Detail</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Courses