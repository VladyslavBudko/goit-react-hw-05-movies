export function setReleaseDate(releaseDate, firstDate) {
  if (releaseDate) {
    return releaseDate.slice(0, 4);
  } else if (firstDate) {
    return firstDate.slice(0, 4);
  }
}

export function setReleaseVote(vote) {
  if (vote * 1 === 0) {
    return null;
  }
  return vote.toFixed(1);
}
