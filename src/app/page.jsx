import PopularCourses from "../components/mine/PopularCourses"
import PopularJobs from "../components/mine/PopularJobs"

const page = () => {
  return (
    <div className='px-3 max-w-5xl mx-auto py-8'>
      <section>
        <h2 className="font-semibold text-xl">Popular <span className="text-amber-500">courses</span></h2>
        <PopularCourses/>
      </section>
      <section>
        <h2 className="font-semibold text-xl">Popular <span className="text-amber-500">jobs</span></h2>
        <PopularJobs/>
      </section>
    </div>
  )
}

export default page