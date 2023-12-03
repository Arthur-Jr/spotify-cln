import Image from 'next/image';
import OriginalVersion from '../../../public/original.png';

export default function Original() {
  return (
    <main>
      <Image src={OriginalVersion} alt="Spotify original version print" />
    </main>
  )
}
