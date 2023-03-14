const getComments = () => {
  axios
    .get('https://jsonplaceholder.typicode.com/comments')
    .then(res => console.log(res.data))
    .catch(err => console.log(err.message));
};
getComments();
