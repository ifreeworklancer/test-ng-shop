// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUri: 'https://fakestoreapi.com/',
  authUri: 'https://reqres.in/api/',
  baseUri: 'http://localhost:4200/',
  firebase: {
    apiKey: "AIzaSyCMRVg_6re_cWvmeFJXcdIy2CWlnoz3erY",
    authDomain: "test-ng-shop.firebaseapp.com",
    projectId: "test-ng-shop",
    storageBucket: "test-ng-shop.appspot.com",
    messagingSenderId: "613496281820",
    appId: "1:613496281820:web:a2eacbbfad008771207219"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
