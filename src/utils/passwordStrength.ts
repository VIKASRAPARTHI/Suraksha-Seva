export function calculatePasswordStrength(password: string): number {
  let strength = 0;
  if (password.length >= 8) strength += 25;
  if (password.match(/[A-Z]/)) strength += 25;
  if (password.match(/[0-9]/)) strength += 25;
  if (password.match(/[^A-Za-z0-9]/)) strength += 25;
  return strength;
}

export function getStrengthLabel(strength: number): string {
  if (strength <= 25) return 'Weak';
  if (strength <= 50) return 'Fair';
  if (strength <= 75) return 'Good';
  return 'Strong';
}

export function getStrengthColor(strength: number): string {
  if (strength <= 25) return 'bg-red-500';
  if (strength <= 50) return 'bg-orange-500';
  if (strength <= 75) return 'bg-yellow-500';
  return 'bg-green-500';
}