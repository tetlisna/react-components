// // import rest from 'msw';
// import { http, HttpResponse } from 'msw'

// import { API_URL_PEOPLE } from 'src/interfaces/constants';

// const allPosts = new Map()

// export const handlers = [
//   http.get(`${API_URL_PEOPLE}`, async({ request }) => {
//    const newItem = await request.json();

//    allPosts.set(newItem, newItem)
//      if (!allPosts) {
//       return new HttpResponse(null, { status: 404 })
//     }
//     return HttpResponse.json(newItem, { status: 201 })
//   }),
// ];
// // import { http } from 'msw'

// // export const handlers = []
