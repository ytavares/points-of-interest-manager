
import dynamic from 'next/dynamic';
const Map = dynamic(() => import('./Map.component'), {
  ssr: false
})

export default Map;