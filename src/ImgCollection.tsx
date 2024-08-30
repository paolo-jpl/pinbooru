export default function ImgCollection({user}: {user: string}){
  return(
    <main >
      Image Collection

      {user ?
        <>User: {user}</>
        : <></>
      }
    </main>
  )
}