import React from 'react'
import { CoustomeReviws } from '../CoustomeReviews/CoustomeReviws'
import { Update } from '../Update/Update'
import './RightSide.css'
export const RightSide = () => {
  return (
    <div className="RightSide">
        <div>
        <h3>Updates</h3>
        <Update/>
        </div>
        <div>
            <h3>Cousomer Reviews</h3>
            <CoustomeReviws/>
        </div>
    </div>
  )
}
