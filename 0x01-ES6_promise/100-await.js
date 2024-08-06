import { uploadPhoto, createUser } from './utils.js';

export default async function asyncUploadUser() {
  try {
    const [photo, user] = await Promise.all([
      uploadPhoto('file.jpg').catch(() => null),
      createUser().catch(() => null)
    ]);

    return {
      photo,
      user
    };
  } catch {
    return {
      photo: null,
      user: null
    };
  }
}
