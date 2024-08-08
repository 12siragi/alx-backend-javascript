import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const [user, photo] = [signUpUser(firstName, lastName), uploadPhoto(fileName)];
  return Promise.allSettled(([user, photo]))
    .then((results) => results.map((ele) => ({
      status: ele.status,
      value: ele.value ? ele.value : String(ele.reason),
    })));
}