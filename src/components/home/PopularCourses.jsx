import SectionHeading from '../SectionHeading'
import CourseCard from '../CourseCard'
import Button from '../Button'
import { Leaf } from '../Decor'
import { courses } from '../../data/courses'

export default function PopularCourses() {
  return (
    <section className="relative overflow-hidden bg-cream-2/70 py-20 sm:py-24 lg:py-28" aria-label="Popular EV courses">
      <Leaf className="top-14 -left-8 h-28 w-28 opacity-20" />
      <Leaf className="right-6 bottom-20 h-20 w-20 rotate-90 opacity-25" color="#E8A928" />
      <div className="container-x relative">
        <SectionHeading
          eyebrow="Popular EV Courses"
          title={
            <>
              Career-Focused Courses for a <span className="hl">Brighter Future</span>
            </>
          }
          description="Specialised electric vehicle programmes built around practical lab work and the skills employers in electric mobility look for."
        />
        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((c, i) => (
            <CourseCard key={c.slug} course={c} index={i} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button to="/courses" variant="outline" arrow>
            View All Courses
          </Button>
        </div>
      </div>
    </section>
  )
}
