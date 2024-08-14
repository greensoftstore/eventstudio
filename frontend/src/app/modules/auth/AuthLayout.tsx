/* eslint-disable jsx-a11y/anchor-is-valid */
import {useEffect} from 'react'
import {Outlet, Link} from 'react-router-dom'
import {toAbsoluteUrl} from '../../../_metronic/helpers'

const AuthLayout = () => {
  useEffect(() => {
    const root = document.getElementById('root')
    if (root) {
      root.style.height = '100%'
    }
    return () => {
      if (root) {
        root.style.height = 'auto'
      }
    }
  }, [])

  return (
    <div className='d-flex flex-column flex-lg-row flex-column-fluid' style={{backgroundImage: `url('${toAbsoluteUrl("/media/auth/bg10.jpeg")}')`}}>
      <div className="d-flex flex-lg-row-fluid">
        <div className="d-flex flex-column flex-center pb-0 pb-lg-10 p-10 w-100">
            <img className="theme-light-show mx-auto mw-100 w-150px w-lg-300px mb-10 mb-lg-20" src={toAbsoluteUrl("/media/auth/agency.png")} alt="" />
            <img className="theme-dark-show mx-auto mw-100 w-150px w-lg-300px mb-10 mb-lg-20" src={toAbsoluteUrl("/media/auth/agency-dark.png")} alt="" />

            <h1 className="text-gray-800 fs-2qx fw-bold text-center mb-7">Fast, Efficient and Productive</h1>

            <div className="text-gray-600 fs-base text-center fw-semibold">In this kind of post,
            <a href="#" className="opacity-75-hover text-primary me-1">the blogger</a>introduces a person they’ve interviewed
            <br />and provides some background information about
            <a href="#" className="opacity-75-hover text-primary me-1">the interviewee</a>and their
            <br />work following this is a transcript of the interview.</div>
        </div>
      </div>

      <div className="d-flex flex-column-fluid flex-lg-row-auto justify-content-center justify-content-lg-end p-12 h-100">
        <div className="bg-body d-flex flex-column flex-center rounded-4 w-md-600px p-10">
          <div className="d-flex flex-center flex-column align-items-stretch h-lg-100 w-md-400px">
            <div className="d-flex flex-center flex-column flex-column-fluid pb-15 pb-lg-20">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export {AuthLayout}
