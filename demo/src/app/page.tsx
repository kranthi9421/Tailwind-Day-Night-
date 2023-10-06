// type Users = {
//   id: number
//   name: string

// }[]

// const page = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users')
//   const users : Users = await res.json()

//   return (
//     <div className=" bg-white  dark:bg-black">
//       {users.map((item) => (
//         <h1 className="text-white">{item.id} - {item.name}</h1>
//       ))}
//     </div>
//   )
// }

// export default page

import Script from 'next/script'

const page = () => {
  return (
    <div className="bg-white dark:bg-slate-900">
      <Script src="demo.js" />
      <img className="moon cursor-pointer" src="./icon-moon.png" alt="" />
      <img
        className="sun cursor-pointer dark:invert-[1]"
        src="./icon-sun.png"
        alt=""
      />
      <h1 className="text-red-100 dark:text-blue-300">Hayansh Krishna</h1>
      <h1 className="text-red-100 dark:text-blue-300">Hayansh Krishna</h1>
      <h1 className="text-red-100 dark:text-blue-300">Hayansh Krishna</h1>
      <h1 className="text-red-100 dark:text-blue-300">Hayansh Krishna</h1>
      <h1 className="text-red-100 dark:text-blue-300">Hayansh Krishna</h1>
    </div>
  )
}

export default page
