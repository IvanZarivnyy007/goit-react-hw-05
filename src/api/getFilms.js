import axios from 'axios';

export async function getTrendingMovie() {
  const baseURL = 'https://api.themoviedb.org';
  const endPoint = '/3/trending/movie/day';
  const url = baseURL + endPoint;
  const apiToken =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NDExNDY0NjYzNzA3NzdiYTY0OTNlMWVkYzk5Mjc5ZSIsIm5iZiI6MTcyMjc4NjU1MS45NTc0OSwic3ViIjoiNjYxNzE4NjVjYzk2ODMwMTg2NGM2Nzg5Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.uvp3phKOn4WmbNUjNBmhvOI-8Tgc_QFlBG8eDuPnhCc';

  const headers = {
    Authorization: `Bearer ${apiToken}`,
  };

  const res = await axios.get(url, { headers });
  return res.data;
}

export async function getMovieSearch(search) {
  const baseURL = 'https://api.themoviedb.org';
  const endPoint = `/3/search/movie?query=${search}`;
  const url = baseURL + endPoint;
  const apiToken =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NDExNDY0NjYzNzA3NzdiYTY0OTNlMWVkYzk5Mjc5ZSIsIm5iZiI6MTcyMjc4NjU1MS45NTc0OSwic3ViIjoiNjYxNzE4NjVjYzk2ODMwMTg2NGM2Nzg5Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.uvp3phKOn4WmbNUjNBmhvOI-8Tgc_QFlBG8eDuPnhCc';

  const headers = {
    Authorization: `Bearer ${apiToken}`,
  };

  const res = await axios.get(url, { headers });
  return res.data;
}

export async function getMovieDetails(movieId) {
  const baseURL = 'https://api.themoviedb.org';
  const endPoint = `/3/movie/${movieId}`;
  const url = baseURL + endPoint;
  const apiToken =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NDExNDY0NjYzNzA3NzdiYTY0OTNlMWVkYzk5Mjc5ZSIsIm5iZiI6MTcyMjc4NjU1MS45NTc0OSwic3ViIjoiNjYxNzE4NjVjYzk2ODMwMTg2NGM2Nzg5Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.uvp3phKOn4WmbNUjNBmhvOI-8Tgc_QFlBG8eDuPnhCc';

  const headers = {
    Authorization: `Bearer ${apiToken}`,
  };

  const res = await axios.get(url, { headers });
  return res.data;
}

export async function getMovieCredits(movieId) {
  const baseURL = 'https://api.themoviedb.org';
  const endPoint = `/3/search/movie/${movieId}/credits`;
  const url = baseURL + endPoint;
  const apiToken =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NDExNDY0NjYzNzA3NzdiYTY0OTNlMWVkYzk5Mjc5ZSIsIm5iZiI6MTcyMjc4NjU1MS45NTc0OSwic3ViIjoiNjYxNzE4NjVjYzk2ODMwMTg2NGM2Nzg5Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.uvp3phKOn4WmbNUjNBmhvOI-8Tgc_QFlBG8eDuPnhCc';

  const headers = {
    Authorization: `Bearer ${apiToken}`,
  };

  const res = await axios.get(url, { headers });
  return res.data;
}

export async function getMovieReviews(movieId) {
  const baseURL = 'https://api.themoviedb.org';
  const endPoint = `/3/search/movie/${movieId}/reviews`;
  const url = baseURL + endPoint;
  const apiToken =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NDExNDY0NjYzNzA3NzdiYTY0OTNlMWVkYzk5Mjc5ZSIsIm5iZiI6MTcyMjc4NjU1MS45NTc0OSwic3ViIjoiNjYxNzE4NjVjYzk2ODMwMTg2NGM2Nzg5Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.uvp3phKOn4WmbNUjNBmhvOI-8Tgc_QFlBG8eDuPnhCc';

  const headers = {
    Authorization: `Bearer ${apiToken}`,
  };

  const res = await axios.get(url, { headers });
  return res.data;
}
