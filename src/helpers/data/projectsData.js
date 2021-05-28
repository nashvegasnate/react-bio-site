import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;
// GET THE PROJECTS
const getProjects = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/projects.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const addProject = (obj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/projects.json`, obj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/projects/${response.data.name}.json`, body)
        .then(() => {
          getProjects().then((projectsArray) => resolve(projectsArray));
        });
    }).catch((error) => reject(error));
});

const updateProject = (project) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/projects/${project.firebaseKey}.json`, project)
    .then(() => getProjects().then(resolve))
    .catch((error) => reject(error));
});

const deleteProject = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/projects/${firebaseKey}.json`)
    .then(() => getProjects().then((projectsArray) => resolve(projectsArray)))
    .catch((error) => reject(error));
});

// // DELETE THOSE BOARDS
// const deleteBoard = (firebaseKey, uid) => new Promise((resolve, reject) => {
//   axios.delete(`${dbUrl}/boards/${firebaseKey}.json`)
//     .then(() => getBoards(uid).then((boardsArray) => resolve(boardsArray)))
//     .catch((error) => reject(error));
// });
// // CREATE NEW BOARD
// const createBoard = (boardObject, uid) => new Promise((resolve, reject) => {
//   axios.post(`${dbUrl}/boards.json`, boardObject)
//     .then((response) => {
//       const body = { firebaseKey: response.data.name };
//       axios.patch(`${dbUrl}/boards/${response.data.name}.json`, body)
//         .then(() => {
//           getBoards(uid).then((boardsArray) => resolve(boardsArray));
//         });
//     }).catch((error) => reject(error));
// });
// // ACCESS SINGLE BOARD
// const getSingleBoard = (firebaseKey) => new Promise((resolve, reject) => {
//   axios.get(`${dbUrl}/boards/${firebaseKey}.json`)
//     .then((response) => resolve(response.data))
//     .catch((error) => reject(error));
// });
// // UPDATE A BOARD'S INFO IN REAL TIME
// const updateBoards = (firebaseKey, boardObject) => new Promise((resolve, reject) => {
//   axios.patch(`${dbUrl}/boards/${firebaseKey}.json`, boardObject)
//     .then(() => getBoards(firebase.auth().currentUser.uid)).then((boardsArray) => resolve(boardsArray))
//     .catch((error) => reject(error));
// });
export {
  getProjects,
  addProject,
  updateProject,
  deleteProject
};
// deleteBoard,
// createBoard,
// getSingleBoard,
// updateBoards
