import Link from 'next/link';
import Image from 'next/image';
import { getInfo } from '../lib/data';

export default function SocialContainer() {
  const info = getInfo();

  return (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Link href={info.pinterest} target="_blank" style={{ opacity: 0.6, transition: 'opacity 0.3s ease' }}>
        <Image src="/icons/pinterest.svg" alt="Pinterest" width={25} height={25} />
      </Link>
      <Link href={info.vk} target="_blank" style={{ opacity: 0.6, transition: 'opacity 0.3s ease' }}>
        <Image src="/icons/vk.svg" alt="VK" width={25} height={25} />
      </Link>
      <Link href={info.instagram} target="_blank" style={{ opacity: 0.6, transition: 'opacity 0.3s ease' }}>
        <Image src="/icons/inst.svg" alt="Instagram" width={25} height={25} />
      </Link>
      <Link href={info.telegram} target="_blank" style={{ opacity: 0.6, transition: 'opacity 0.3s ease' }}>
        <Image src="/icons/tg.svg" alt="Telegram" width={25} height={25} />
      </Link>
      <Link href={info.dzen} target="_blank" style={{ opacity: 0.6, transition: 'opacity 0.3s ease' }}>
        <Image src="/icons/dzen.svg" alt="Дзен" width={25} height={25} />
      </Link>
      <style jsx>{`
        a:hover {
          opacity: 1;
        }
      `}</style>
    </div>
  );
}