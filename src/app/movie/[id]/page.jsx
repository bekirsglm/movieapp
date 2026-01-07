
import React from 'react'
import Image from 'next/image';

const getMovie = async(id) => {
    const res = await fetch( `https://api.themoviedb.org/3/movie/${id}?api_key=b37c04a4e6a0f68c76efea44c1f4c273`
);
 return await res.json();  
}

const Page = async ({params}) => {
    const id = params.id;
    const movieDetail = await getMovie(id)
   
    
  return (
    <div className='relative p-7 min-h-screen'>
       <Image style={{objectFit: "cover"}} fill src={`https://image.tmdb.org/t/p/original/${movieDetail?.backdrop_path || movieDetail?.poster_path}`} alt='detail' />
       <div className='absolute'>
        <div className='text-4xl font-bold my-4'>{movieDetail?.title}</div>
        <div className='w-1/2'>{movieDetail?.overview}</div>
        <div className='my-3'>{movieDetail?.title}</div>
        <div>{movieDetail?.release_date} - {movieDetail?.vote_average}</div>
         <div className='my-2 border w-32 hover:bg-white hover:text-black transition-all p-2 rounded-md text-center cursor-pointer text-lg'>Trail</div>
       </div>
    </div>
  );
};

export default Page;