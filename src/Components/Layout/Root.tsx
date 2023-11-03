// import SearchSection from '../SearchSection/SearchSection';
// import ListItems from '../ItemsSection/ListItems';
// import { FormEvent, useState } from 'react';

// const Root = () => {
//   const [searchQuery, setSearchQuery] = useState(
//     localStorage.getItem('searchValue')
//   );

//   function handleSubmit(event: FormEvent): void {
//     event.preventDefault();
//     const target = event.target as typeof event.target & {
//       search: { value: string };
//     };
//     setSearchQuery(target.search.value.trim());
//     localStorage.setItem('searchValue', target.search.value.trim());
//   }

//   return (
//     <>
//       <div id="sidebar">
//         <h1>React Router Search</h1>
//         <div>
//           <SearchSection
//             searchQuery={searchQuery}
//             handleSubmit={handleSubmit}
//           />
//         </div>
//         <ListItems searchQuery={searchQuery} />
//       </div>
//       <div id="detail"></div>
//     </>
//   );
// };
// export default Root;
