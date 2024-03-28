// import { Injectable } from '@angular/core';
// import { HttpInterceptorFn } from '@angular/common/http';
// import {
//   HttpRequest,
//   HttpHandler,
//   HttpEvent,
//   HttpInterceptor,
// } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable()
// export class HttpInterceptorService implements HttpInterceptor {
//   constructor() {}

//   intercept(
//     req: HttpRequest<any>,
//     next: HttpHandler
//   ): Observable<HttpEvent<any>> {
//     var userSession = JSON.parse(localStorage.getItem('userSession'));

//     if (userSession) {
//       const token = localStorage.getItem('token');
//       const modifiedReq = req.clone({
//         setHeaders: {
//           Authorization: `Bearer ${userSession.token}`,
//         },
//       });
//       return next.handle(modifiedReq);
//     }
//     return next.handle(req);
//   }
// }

