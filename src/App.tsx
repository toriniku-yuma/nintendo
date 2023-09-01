import Hedder from './Hedder'
import BigImage from './BigImage'
import BigImageCategory from './BigImageCategory'
import NewsTopic from './NewsTopic'
import GameSoft from './GameSoft'

function App() {

  return (
    <div className='my-0 mx-auto'>
      <Hedder/>
      <div className='overflow-hidden'>
        <div className='relative'>
          <BigImage/>
          <BigImageCategory/>
        </div>
      </div>
      <NewsTopic/>
      <GameSoft/>
    </div>
  )
}

export default App
