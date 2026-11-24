import { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'

// Route-level code splitting keeps the homepage bundle small.
const About = lazy(() => import('./pages/About'))
const Courses = lazy(() => import('./pages/Courses'))
const CourseDetails = lazy(() => import('./pages/CourseDetails'))
const Placement = lazy(() => import('./pages/Placement'))
const SuccessStories = lazy(() => import('./pages/SuccessStories'))
const Blog = lazy(() => import('./pages/Blog'))
const BlogDetails = lazy(() => import('./pages/BlogDetails'))
const Contact = lazy(() => import('./pages/Contact'))
const Enquiry = lazy(() => import('./pages/Enquiry'))
const Legal = lazy(() => import('./pages/Legal'))
const NotFound = lazy(() => import('./pages/NotFound'))

export default function App() {
  return (
    <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:slug" element={<CourseDetails />} />
          <Route path="/placement" element={<Placement />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/enquiry" element={<Enquiry />} />
          <Route path="/privacy-policy" element={<Legal kind="privacy" />} />
          <Route path="/terms" element={<Legal kind="terms" />} />
          <Route path="*" element={<NotFound />} />
        </Route>
    </Routes>
  )
}
