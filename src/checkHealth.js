export default function checkHealth(char) {
  let status;
  if (char.health > 50) {
    status = 'healthy';
  } else if (char.health >= 15) {
    status = 'wounded';
  } else if (char.health < 15) {
    status = 'critical';
  }
  return status;
}
