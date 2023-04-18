import Image from "next/image";
import Link from "next/link";
import { title } from "process";
import {FiThumbsUp} from "react-icons/fi"

export default function Card({result}) {
  return (
    <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group">
      
      <Link href={`/movie/${result.filmId}`}>
        <Image src={result.posterUrl} alt={result.nameRu} width={500} height={300}
        className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200 object-cover h-80"
        style={{
            maxWidth: "100%",
        }}
        placeholder="blur"
        blurDataURL="/spinner.svg"
        ></Image>
        <h2 className="truncate text-lg font-bold">{result.nameRu || title.name}</h2>
        <p className="flex items-center">{result.year}
        <FiThumbsUp className="h-5 mr-1 ml-3"/> {result.rating}
        </p>
      </Link>
    </div>
  )
}
