// export const adminPaths2 = [
//   {
//     name: "Dashboard",
//     path: "dashboard",
//     element: "AdminDashboard",
//   },
//   {
//     name: "User Management",
//     children: [
//       {
//         name: "Create Admin",
//         path: "create-admin",
//         element: "CreateAdmin",
//       },
//       {
//         name: "Dashboard",
//         path: "create-faculty",
//         element: "CreateFaculty",
//       },
//       {
//         name: "Dashboard",
//         path: "create-student",
//         element: "CreateStudent",
//       },
//     ],
//   },
// ];

// // const newArray = adminPaths2.reduce((acc, item) => {
// //   if (item.path && item.element) {
// //     acc.push({
// //       path: item.path,
// //       element: item.element,
// //     });
// //   }

// //   if (item.children) {
// //     item.children.forEach((child) => {
// //       acc.push({
// //         path: child.path,
// //         element: child.element,
// //       });
// //     });
// //   }

// //   return acc;
// // }, []);

// // const newArray = adminPaths2.reduce((acc, item) => {
// //   if (item.path && item.name) {
// //     acc.push({
// //       key: item.name,
// //       label: item.element,
// //     });
// //   }

// //   if (item.children) {
// //     acc.push({
// //       key: item.name,
// //       label: item.name,
// //       children: item.children.map((child) => ({
// //         key: child.name,
// //         label: child.element,
// //       })),
// //     });
// //   }

// //   return acc;
// // }, []);

// console.log(newArray);

const obj = {
  name: "Mohon",
  age: 18,
  role: "Programmer",
  greet: () => {
    return "Hello Guys";
  },
};

console.log(JSON.stringify(obj));
