// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  HrURLprefix: 'http://15.206.152.181:8094/hr',
  employeeURLprefix: 'http://15.206.152.181:8080/employeeService/quiz/test',
  adminURLprefix:'http://15.206.152.181:8092/admin',
  authURLprefix:'http://15.206.152.181:8091/auth',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
