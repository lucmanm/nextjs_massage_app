"use client"
import Image from 'next/image'
import { deleteResourcesByPublicIds } from './action'
// TODO DELETE TAG
export default function TestDiv({data}:{data:{ secure_url:string, public_id: string}[]}) {

  return (
    <div>
        {data.map((data) => (
            <Image
              key={data.secure_url}
              src={data.secure_url}
              alt="sdsds"
              width={500}
              height={500}
              onClick={ async () => {
                await deleteResourcesByPublicIds(data.public_id)

              }}
              className="hover:bg-red-600/30"
            />
          ))}
    </div>
  )
}
