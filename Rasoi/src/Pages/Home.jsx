import React from 'react'
import { Search } from 'lucide-react'

const Home = () => {
  return (
    <div>
      <div className=' flex flex-row items-center mt-5'>
        <search className=' flex flex-row items-center gap-1 w-150 bg-  border-2 border-gray-300 rounded-3xl px-5 py-2 ml-130'>
          <div><Search color="#c0bec1" strokeWidth={2} /></div>
          <div>
            <form className=' w-200'>
              <input name="Sraech" id="Search" placeholder="Search Your Favorite Food . . ." className=' w-200 text-lg font-medium'/>
            </form>
          </div>
        </search>
      </div>
    </div>
  )
}

export default Home